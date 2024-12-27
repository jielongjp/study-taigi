import React, { useState, useEffect } from "react";
import { RowData } from "@/utils/types";
import { styled } from "styled-components";
import Choice from "../Choice";

const MultipleChoiceItem: React.FC<{
  rowData: RowData;
  randomChoices: string[];
  showEnglish: boolean;
  isTestModal?: boolean;
}> = ({ rowData, randomChoices, showEnglish, isTestModal }) => {
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  return (
    <StListItem>
      <p>{rowData.columnD}</p>
      <StAudio>
        {isTestModal ? (
          <audio controls autoPlay>
            <source src={rowData.columnE} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <audio controls>
            <source src={rowData.columnE} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        )}
      </StAudio>
      <StSmallText>choose the correct translation:</StSmallText>
      <StMultipleChoice>
        {randomChoices.map((choice, index) => (
          <Choice
            key={index}
            choice={choice}
            correctChoice={showEnglish ? rowData.columnB : rowData.columnA}
          />
        ))}
      </StMultipleChoice>
      {rowData.columnG && rowData.columnG.includes("Example") ? (
        <StExamplesButton onClick={() => toggleExamples()}>
          Examples
        </StExamplesButton>
      ) : null}
      {showExamples && (
        <>
          {rowData.columnG && rowData.columnG.includes("Example sentence") ? (
            <>
              <p>{rowData.columnI}</p>
              {rowData.columnJ && (
                <StAudio>
                  <audio controls>
                    <source src={rowData.columnJ} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </StAudio>
              )}
              {rowData.columnN && <p>{rowData.columnN}</p>}
              {rowData.columnO && (
                <StAudio>
                  <audio controls>
                    <source src={rowData.columnO} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </StAudio>
              )}
            </>
          ) : (
            <p>sorry no examples</p>
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
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2);
  font-size: 22px;

  &:hover {
    box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.3);
  }

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
    @media (max-width: 450px) {
      width: 80%;
    }
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
