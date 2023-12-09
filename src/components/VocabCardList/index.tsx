import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import Loading from "../Loading";
import VocabListItem from "../VocabListItem";
import MultipleChoiceItem from "../MultipleChoiceItem";

export interface RowData {
  [key: string]: string | undefined;
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
  columnP?: string;
}

interface VocabListProps {
  vocabList: RowData[];
  categoryName: string;
}

export default function VocabList({ vocabList, categoryName }: VocabListProps) {
  const [hideMeaning, setHideMeaning] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEnglish, setShowEnglish] = useState(true);

  const toggleVisibility = () => {
    setHideMeaning(!hideMeaning);
  };

  const toggleTest = () => {
    setShowTest(!showTest);
  };

  const toggleEnglish = () => {
    setShowEnglish(!showEnglish);
  };

  console.log(vocabList);

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

function generateRandomChoices(
  rowData: RowData,
  vocabList: RowData[],
  columnName: string
) {
  let otherColumnValues = vocabList
    .filter((item) => item[columnName] !== rowData[columnName])
    .map((item) => item[columnName]) as string[];

  otherColumnValues = shuffle(otherColumnValues);

  const shuffledChoices = shuffle([
    rowData[columnName] || "",
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
