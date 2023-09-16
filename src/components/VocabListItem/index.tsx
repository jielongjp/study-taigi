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
        {rowData.columnA}
      </h3>
      <p>{rowData.columnB}</p>
      <StAudio>
        <audio controls>
          <source src={rowData.columnC} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </StAudio>
      <StSmallText style={{ display: hideMeaning ? "none" : "block" }}>
        定義：{rowData.columnD}
      </StSmallText>
      <StExamplesButton onClick={() => toggleExamples()}>
        Examples
      </StExamplesButton>
      {showExamples && (
        <>
          {!hideMeaning && <p>{rowData.columnF || "No examples"}</p>}
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
  );
};

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
    background-color: #85a3c3;
  }
`;

export default VocabListItem;
