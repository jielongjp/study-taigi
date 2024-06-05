import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "../Loading";
import VocabListItem from "../VocabListItem";
import MultipleChoiceItem from "../MultipleChoiceItem";
import generateRandomChoices from "@/utils/generateRandomChoices";
import { RowData } from "@/utils/types";
import TestModal from "../TestModal";

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
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 200;

  useEffect(() => {
    async function fetchTotalRows() {
      try {
        setLoading(true);
        const response = await axios.get(spreadsheetUrl);
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");

        const tableRows = doc.querySelectorAll("tbody tr");
        setTotalRows(tableRows.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchTotalRows();
  }, [spreadsheetUrl]);

  useEffect(() => {
    async function fetchPageData(page: number) {
      try {
        const startTime = performance.now();

        setLoading(true);
        const response = await axios.get(spreadsheetUrl);
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");

        const tableRows = doc.querySelectorAll("tbody tr");
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        const dataRows: RowData[] = Array.from(tableRows)
          .slice(start, end)
          .map((row) => {
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

            if (
              rowData.columnG &&
              rowData.columnG.includes("Example sentence")
            ) {
              rowData = {
                ...rowData,
                columnH: cells[7]?.textContent || "",
                columnI: cells[8]?.textContent || "",
                columnJ: cells[9]?.textContent || "",
                columnK: cells[10]?.textContent || "",
              };
            }

            if (
              rowData.columnL &&
              rowData.columnL.includes("Example sentence")
            ) {
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
        const endTime = performance.now();

        console.log(`execution time: ${(endTime - startTime) / 1000} seconds`);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    if (totalRows > 0) {
      fetchPageData(currentPage);
    }
  }, [spreadsheetUrl, currentPage, totalRows]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <StPageButton
          key={i}
          onClick={() => handlePageChange(i)}
          isActive={i === currentPage}
        >
          {i}
        </StPageButton>
      );
    }
    return <StPageWrapper>{pages}</StPageWrapper>;
  };

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
            {showTest && (
              <StToggle onClick={() => toggleTestModal(0)}>
                Use popout test
              </StToggle>
            )}
            <h2>Category: {categoryName.replace(/_/g, " ")}</h2>
            {vocabList.length !== 0 ? (
              <p>total {totalRows} words</p>
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
              showEnglish={showEnglish}
            />
          )}
          {renderPagination()}
        </>
      )}
    </StWrapper>
  );
}

function shuffleArray(array: RowData[]): RowData[] {
  const shuffled = [...array];
  shuffled.sort(() => Math.random() - 0.5);
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

const StPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StPageButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#0056b3" : "#007bff")};
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#004494" : "#0056b3")};
  }
`;
