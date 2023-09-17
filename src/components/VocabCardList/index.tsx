import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Loading from "../Loading";
import VocabListItem from "../VocabListItem";
import MultipleChoiceItem from "../MultipleChoiceItem";

export interface RowData {
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
  columnO?: string;
}

interface VocabListProps {
  spreadsheetUrl: string;
  categoryName: string;
}

export default function VocabList({
  spreadsheetUrl,
  categoryName,
}: VocabListProps) {
  const [vocabList, setVocabList] = useState<RowData[]>([]);
  const [hideMeaning, setHideMeaning] = useState(false);
  const [showTest, setShowTest] = useState(false);
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
            columnF: cells[5]?.textContent || "",
            columnK: cells[10]?.textContent || "",
          };

          if (rowData.columnF && rowData.columnF.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnG: cells[6]?.textContent || "",
              columnH: cells[7]?.textContent || "",
              columnI: cells[8]?.textContent || "",
              columnJ: cells[9]?.textContent || "",
            };
          }

          if (rowData.columnK && rowData.columnK.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnL: cells[11]?.textContent || "",
              columnM: cells[12]?.textContent || "",
              columnN: cells[13]?.textContent || "",
              columnO: cells[14]?.textContent || "",
            };
          }

          return rowData;
        });
        setVocabList(dataRows);
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

  const toggleTest = () => {
    setShowTest(!showTest);
  };

  return (
    <StWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StCatTitle>
            <StToggle onClick={toggleTest}>
              {showTest ? "Hide test" : "Test me"}
            </StToggle>
            <h2>Category: {categoryName}</h2>
            {vocabList.length !== 0 ? (
              <p>total {vocabList.length} words</p>
            ) : (
              <p>No data available</p>
            )}
          </StCatTitle>
          <div>
            {showTest ? (
              <StList>
                {vocabList.map((rowData, index) => (
                  <MultipleChoiceItem
                    key={index}
                    rowData={rowData}
                    randomChoices={generateRandomChoices(rowData, vocabList)}
                  />
                ))}
              </StList>
            ) : (
              <>
                {vocabList.length !== 0 ? (
                  <StToggle onClick={toggleVisibility}>
                    {hideMeaning ? "Show Meaning" : "Hide Meaning"}
                  </StToggle>
                ) : (
                  ""
                )}
                <StList>
                  {vocabList.map((rowData, index) => (
                    <VocabListItem
                      key={index}
                      rowData={rowData}
                      hideMeaning={hideMeaning}
                    />
                  ))}
                </StList>
              </>
            )}
          </div>
        </>
      )}
    </StWrapper>
  );
}

function generateRandomChoices(rowData: RowData, vocabList: RowData[]) {
  let otherColumnValues = vocabList
    .filter((item) => item.columnA !== rowData.columnA)
    .map((item) => item.columnA);
  otherColumnValues = shuffle(otherColumnValues);

  const shuffledChoices = shuffle([
    rowData.columnA,
    ...otherColumnValues.slice(0, 3),
  ]);

  return shuffledChoices;
}

function shuffle(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const StWrapper = styled.div`
  text-align: center;
`;

const StCatTitle = styled.div`
  padding: 8px;
  p {
    font-size: 12px;
    padding: 2px;
  }
`;

const StToggle = styled.button`
  background-color: #f0f0f0;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #85a3c3;
  }
`;

const StList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
