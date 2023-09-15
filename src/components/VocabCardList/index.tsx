import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled, keyframes } from "styled-components";

interface RowData {
  columnA: string;
  columnB: string;
  columnC: string;
  columnD: string;
  columnE?: string;
  columnF?: string;
  columnG?: string;
  columnH?: string;
  columnI?: string;
  columnJ?: string;
  columnK?: string;
  columnL?: string;
  columnM?: string;
  columnN?: string;
}

interface DataListProps {
  spreadsheetUrl: string;
  categoryName: string;
}

export default function DataList({
  spreadsheetUrl,
  categoryName,
}: DataListProps) {
  const [dataList, setDataList] = useState<RowData[]>([]);
  const [hideMeaning, setHideMeaning] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(spreadsheetUrl);
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");

        const tableRows = doc.querySelectorAll("tbody tr");

        const dataRows: RowData[] = Array.from(tableRows).map((row) => {
          const cells = row.querySelectorAll("td");
          let rowData: RowData = {
            columnA: cells[0]?.textContent || "",
            columnB: cells[1]?.textContent || "",
            columnC: cells[2]?.textContent || "",
            columnD: cells[3]?.textContent || "",
            columnE: cells[4]?.textContent || "",
            columnJ: cells[9]?.textContent || "",
          };

          if (rowData.columnE && rowData.columnE.includes("Example")) {
            console.log("row example");
            rowData = {
              ...rowData,
              columnF: cells[5]?.textContent || "",
              columnG: cells[6]?.textContent || "",
              columnH: cells[7]?.textContent || "",
              columnI: cells[8]?.textContent || "",
            };
          }

          if (rowData.columnJ && rowData.columnJ.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnK: cells[10]?.textContent || "",
              columnL: cells[11]?.textContent || "",
              columnM: cells[12]?.textContent || "",
              columnN: cells[13]?.textContent || "",
            };
          }

          return rowData;
        });
        setDataList(dataRows);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [spreadsheetUrl]);

  const toggleVisibility = () => {
    setHideMeaning(!hideMeaning);
  };

  const [showExamples, setShowExamples] = useState<boolean[]>(
    Array(dataList.length).fill(false)
  );

  const toggleExamples = (index: number) => {
    const newShowExamples = [...showExamples];
    newShowExamples[index] = !newShowExamples[index];
    setShowExamples(newShowExamples);
  };

  return (
    <StWrapper>
      {loading ? (
        <StLoadingContainer>
          <StLoadingMessage>Loading...</StLoadingMessage>
          <StLoadingSpinner />
        </StLoadingContainer>
      ) : (
        <>
          <StCatTitle>
            <h2>Category: {categoryName} vocab</h2>
            <p>total {dataList.length} words</p>
          </StCatTitle>
          <div>
            <StToggle onClick={toggleVisibility}>
              {hideMeaning ? "Show Meaning" : "Hide Meaning"}
            </StToggle>
            <StList>
              {dataList.map((rowData, index) => (
                <StListItem key={index}>
                  <h3 style={{ display: hideMeaning ? "none" : "block" }}>
                    {rowData.columnA}
                  </h3>
                  <p>{rowData.columnB}</p>
                  <StAudio>
                    <audio controls>
                      <source src={rowData.columnC} type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>
                  </StAudio>
                  <StSmallText
                    style={{ display: hideMeaning ? "none" : "block" }}
                  >
                    定義：{rowData.columnD}
                  </StSmallText>
                  <StExamplesButton onClick={() => toggleExamples(index)}>
                    Examples
                  </StExamplesButton>
                  {showExamples[index] && (
                    <>
                      {!hideMeaning && (
                        <p>{rowData.columnF || "No examples"}</p>
                      )}
                      <p>{rowData.columnG}</p>
                      {rowData.columnH ? (
                        <StAudio>
                          <audio controls>
                            <source src={rowData.columnH} type="audio/wav" />
                            Your browser does not support the audio element.
                          </audio>
                        </StAudio>
                      ) : null}

                      {!hideMeaning && <p>{rowData.columnI}</p>}
                      {!hideMeaning && <p>{rowData.columnK || ""}</p>}
                      {!hideMeaning && <p>{rowData.columnL}</p>}
                      {rowData.columnM ? (
                        <StAudio>
                          <audio controls>
                            <source src={rowData.columnM} type="audio/wav" />
                            Your browser does not support the audio element.
                          </audio>
                        </StAudio>
                      ) : null}
                      {!hideMeaning && <p>{rowData.columnN}</p>}
                    </>
                  )}
                </StListItem>
              ))}
            </StList>
          </div>
        </>
      )}
    </StWrapper>
  );
}

const StWrapper = styled.div`
  text-align: center;
`;

const StCatTitle = styled.div`
  padding: 8px;
  p {
    font-size: 12px;
  }
`;

const StToggle = styled.button`
  background-color: #f0f0f0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StListItem = styled.li`
  flex: 0 0 calc(33.3333% - 20px); /* Adjust the width as needed */
  margin: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  font-size: 22px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const StSmallText = styled.p`
  font-size: 14px;
  text-overflow: ellipsis;
`;

const StAudio = styled.div`
  padding: 4px;
  audio {
    border-radius: 12px;
  }
`;

const StExamplesButton = styled.button`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// loading and spinner TODO: put in seperate component

const StLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const StLoadingMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StLoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
`;
