import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Loading from "../Loading";
import VocabListItem from "../VocabListItem";
import MultipleChoiceItem from "../MultipleChoiceItem";
import generateRandomChoices from "@/utils/generateRandomChoices";
import { RowData } from "@/utils/types";

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
  const [showEnglish, setShowEnglish] = useState(true);
  const [showTestModal, setShowTestModal] = useState(false);
  const [TestModalIndex, setTestModalIndex] = useState(0);

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
            columnG: cells[6]?.textContent || "",
            columnL: cells[11]?.textContent || "",
          };

          if (rowData.columnG && rowData.columnG.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnH: cells[7]?.textContent || "",
              columnI: cells[8]?.textContent || "",
              columnJ: cells[9]?.textContent || "",
              columnK: cells[10]?.textContent || "",
            };
          }

          if (rowData.columnL && rowData.columnL.includes("Example sentence")) {
            rowData = {
              ...rowData,
              columnM: cells[12]?.textContent || "",
              columnN: cells[13]?.textContent || "",
              columnO: cells[14]?.textContent || "",
              columnP: cells[15]?.textContent || "",
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

  const toggleEnglish = () => {
    setShowEnglish(!showEnglish);
  };

  const toggleTestModal = (index: number) => {
    setTestModalIndex(index);
    setShowTestModal(true);
  };

  const closeTestModal = () => {
    setShowTestModal(false);
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
            <StToggle onClick={() => toggleTestModal(0)}>
              Test Popout mode
            </StToggle>
            <h2>Category: {categoryName.replace(/_/g, " ")}</h2>
            {vocabList.length !== 0 ? (
              <p>total {vocabList.length} words</p>
            ) : (
              <p>No data available</p>
            )}
          </StCatTitle>
          <div>
            {showTest ? (
              <>
                {!showEnglish && (
                  <p>
                    For English multiple choice options, click &quot;use
                    English&quot; before testing.
                  </p>
                )}
                <StList>
                  {vocabList.map((rowData, index) => (
                    <MultipleChoiceItem
                      key={index}
                      rowData={rowData}
                      showEnglish={showEnglish}
                      randomChoices={generateRandomChoices(
                        rowData,
                        vocabList,
                        showEnglish ? "columnB" : "columnA"
                      )}
                    />
                  ))}
                </StList>
              </>
            ) : (
              <>
                {vocabList.length !== 0 ? (
                  <>
                    <StToggle onClick={toggleVisibility}>
                      {hideMeaning ? "Show Meaning" : "Hide Meaning"}
                    </StToggle>
                    {!hideMeaning && (
                      <StToggle onClick={toggleEnglish}>
                        {showEnglish ? "Hide English" : "Use English"}
                      </StToggle>
                    )}
                  </>
                ) : (
                  ""
                )}
                <StList>
                  {vocabList.map((rowData, index) => (
                    <VocabListItem
                      key={index}
                      rowData={rowData}
                      hideMeaning={hideMeaning}
                      showEnglish={showEnglish}
                      isUserList={false}
                    />
                  ))}
                </StList>
              </>
            )}
          </div>
          {showTestModal && (
            <TestModal
              vocabList={shuffleArray(vocabList)}
              initialIndex={TestModalIndex}
              onClose={closeTestModal}
            />
          )}
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
