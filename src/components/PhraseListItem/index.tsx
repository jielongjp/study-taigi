import { styled } from "styled-components";
import { RowData } from "@/utils/types";

const PhraseListItem: React.FC<{
  rowData: RowData;
  hideMeaning: boolean;
  showEnglish: boolean;
}> = ({ rowData, hideMeaning, showEnglish }) => {
  return (
    <StListItem>
      <h3 style={{ display: showEnglish && !hideMeaning ? "block" : "none" }}>
        {rowData.columnB}
      </h3>
      <h3 style={{ display: hideMeaning ? "none" : "block" }}>
        {rowData.columnC}
      </h3>
      <p>{rowData.columnD}</p>
      <StAudio>
        <audio controls>
          <source src={rowData.columnE} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </StAudio>
      {rowData.columnF && (
        <StSmallText style={{ display: hideMeaning ? "none" : "block" }}>
          釋義：{rowData.columnF}
        </StSmallText>
      )}
    </StListItem>
  );
};

const StListItem = styled.li`
  flex: 0 0 calc(50% - 20px);
  margin: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.2);
  font-size: 22px;

  &:hover {
    box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.3);
  }

  & > * {
    padding: 8px 0;
  }

  @media (max-width: 943px) {
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

export default PhraseListItem;
