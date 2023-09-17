import React, { useState, useEffect } from "react";
import { RowData } from "../VocabCardList";
import { styled } from "styled-components";
import Choice from "../Choice";

const MultipleChoiceItem: React.FC<{
  rowData: RowData;
  randomChoices: string[];
}> = ({ rowData, randomChoices }) => {
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  return (
    <StListItem>
      <p>{rowData.columnC}</p>
      <StAudio>
        <audio controls>
          <source src={rowData.columnD} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </StAudio>
      <StSmallText>choose the correct Mandarin translation:</StSmallText>
      <StMultipleChoice>
        {randomChoices.map((choice, index) => (
          <Choice key={index} choice={choice} correctChoice={rowData.columnA} />
        ))}
      </StMultipleChoice>
      <StExamplesButton onClick={() => toggleExamples()}>
        Examples
      </StExamplesButton>
      {showExamples && (
        <>
          {rowData.columnF && rowData.columnF.includes("Example sentence") ? (
            <>
              <p>{rowData.columnH}</p>
              {rowData.columnI && (
                <StAudio>
                  <audio controls>
                    <source src={rowData.columnI} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </StAudio>
              )}
              {rowData.columnM && <p>{rowData.columnM}</p>}
              {rowData.columnN && (
                <StAudio>
                  <audio controls>
                    <source src={rowData.columnN} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </StAudio>
              )}
            </>
          ) : (
            <p>No examples</p>
          )}
        </>
      )}
    </StListItem>
  );
};

const StListItem = styled.li`
  flex: 0 0 calc(33.3333% - 20px);
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
    background-color: #85a3c3;
  }
`;

const StMultipleChoice = styled.ul`
  list-style: none;
`;

export default MultipleChoiceItem;
