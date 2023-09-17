import { useState } from "react";
import { styled } from "styled-components";
import { RowData } from "../VocabCardList";

const VocabListItem: React.FC<{ rowData: RowData; hideMeaning: boolean }> = ({
  rowData,
  hideMeaning,
}) => {
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  return (
    <StListItem>
      <h3 style={{ display: hideMeaning ? "none" : "block" }}>
        {rowData.columnB}
      </h3>
      <p>{rowData.columnC}</p>
      <StAudio>
        <audio controls>
          <source src={rowData.columnD} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </StAudio>
      <StSmallText style={{ display: hideMeaning ? "none" : "block" }}>
        釋義：{rowData.columnE}
      </StSmallText>
      <StExamplesButton onClick={() => toggleExamples()}>
        Examples
      </StExamplesButton>
      {showExamples && (
        <>
          {!hideMeaning && <p>{rowData.columnG || "No examples"}</p>}
          <p>{rowData.columnH}</p>
          {rowData.columnI ? (
            <StAudio>
              <audio controls>
                <source src={rowData.columnI} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </StAudio>
          ) : null}

          {!hideMeaning && <p>{rowData.columnJ}</p>}
          {!hideMeaning && <p>{rowData.columnL || ""}</p>}
          {!hideMeaning && <p>{rowData.columnM}</p>}
          {rowData.columnN ? (
            <StAudio>
              <audio controls>
                <source src={rowData.columnN} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </StAudio>
          ) : null}
          {!hideMeaning && <p>{rowData.columnO}</p>}
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

  @media (max-width: 650px) {
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

export default VocabListItem;
