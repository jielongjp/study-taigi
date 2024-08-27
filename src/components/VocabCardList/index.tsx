import { useState, useEffect } from "react";
import { styled } from "styled-components";
import VocabListItem from "../VocabListItem";
import MultipleChoiceItem from "../MultipleChoiceItem";
import generateRandomChoices from "@/utils/generateRandomChoices";
import { RowData } from "@/utils/types";
import TestModal from "../TestModal";

interface VocabListProps {
  categoryName: string;
  vocabList: RowData[];
}

export default function VocabList({ vocabList, categoryName }: VocabListProps) {
  const [hideMeaning, setHideMeaning] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showTestModal, setShowTestModal] = useState(false);
  const [TestModalIndex, setTestModalIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    const isMobile = Math.min(window.screen.width, window.screen.height) < 768;

    if (!isMobile) {
      setDisplayCount(250); // set to 250 for larger devices (desktop)
    }
  }, []);

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

  const handleSeeMore = () => {
    setDisplayCount((prevCount) => prevCount + 20);
  };

  return (
    <StWrapper>
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
                {vocabList.slice(0, displayCount).map((rowData, index) => (
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
                {vocabList.slice(0, displayCount).map((rowData, index) => (
                  <VocabListItem
                    key={index}
                    rowData={rowData}
                    hideMeaning={hideMeaning}
                    showEnglish={showEnglish}
                    isUserList={false}
                  />
                ))}
              </StList>
              {displayCount < vocabList.length && (
                <StSeeMoreButton onClick={handleSeeMore}>
                  See more words
                </StSeeMoreButton>
              )}
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
      </>
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

const StSeeMoreButton = styled.button`
  background-color: #016d79;
  padding: 10px 20px;
  margin: 20px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #1863bd;
  }
`;
