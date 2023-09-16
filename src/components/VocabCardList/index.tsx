import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Loading from "../Loading";
import VocabListItem from "../VocabListItem";

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

  const [showExamples, setShowExamples] = useState<boolean[]>(
    Array(vocabList.length).fill(false)
  );

  const toggleExamples = (index: number) => {
    const newShowExamples = [...showExamples];
    newShowExamples[index] = !newShowExamples[index];
    setShowExamples(newShowExamples);
  };

  return (
    <StWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StCatTitle>
            <h2>Category: {categoryName} vocab</h2>
            <p>total {vocabList.length} words</p>
          </StCatTitle>
          <div>
            <StToggle onClick={toggleVisibility}>
              {hideMeaning ? "Show Meaning" : "Hide Meaning"}
            </StToggle>
            <StList>
              {vocabList.map((rowData, index) => (
                <VocabListItem
                  key={index}
                  rowData={rowData}
                  hideMeaning={hideMeaning}
                />
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
