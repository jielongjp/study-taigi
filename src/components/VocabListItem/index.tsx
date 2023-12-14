import { useState } from "react";
import { styled } from "styled-components";
import { RowData } from "../VocabCardList";

const VocabListItem: React.FC<{
  rowData: RowData;
  hideMeaning: boolean;
  showEnglish: boolean;
}> = ({ rowData, hideMeaning, showEnglish }) => {
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  const addCookie = () => {
    const existingData: RowData[] = JSON.parse(getCookie("userVocabList")) || [];

    const isAlreadyAdded = existingData.some((item) => item.columnB === rowData.columnB);

    if (!isAlreadyAdded) {
      const { columnB, columnC, columnD, columnE, columnF } = rowData;
      const newData: RowData[] = [...existingData, { columnB, columnC, columnD, columnE, columnF }];
      setCookie("userVocabList", JSON.stringify(newData), 365);
    }
  };

  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  };

  const setCookie = (name: string, value: string, daysToExpire: number) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
  };
  

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
      <StSmallText style={{ display: hideMeaning ? "none" : "block" }}>
        釋義：{rowData.columnF}
      </StSmallText>
      {rowData.columnG && rowData.columnG.includes("Example") ? (
        <StExamplesButton onClick={() => toggleExamples()}>
          Examples
        </StExamplesButton>
      ) : null}
      {showExamples && (
        <>
          {!hideMeaning && <p>{rowData.columnH || "sorry no examples"}</p>}
          <p>{rowData.columnI}</p>
          {rowData.columnJ ? (
            <StAudio>
              <audio controls>
                <source src={rowData.columnJ} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </StAudio>
          ) : null}

          {!hideMeaning && <p>{rowData.columnK}</p>}

          {rowData.columnL &&
            rowData.columnL.includes("Example") &&
            !hideMeaning && (
              <>
                <p>{rowData.columnM || ""}</p>
                <p>{rowData.columnN}</p>
                {rowData.columnO ? (
                  <StAudio>
                    <audio controls>
                      <source src={rowData.columnO} type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>
                  </StAudio>
                ) : null}
                <p>{rowData.columnP || ""}</p>
              </>
            )}
        </>
      )}
      <StAddButton onClick={addCookie}>Add</StAddButton>
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

const StAddButton = styled.button`
  display: flex;
  cursor: pointer;
  background-color: #931010;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`;

export default VocabListItem;
