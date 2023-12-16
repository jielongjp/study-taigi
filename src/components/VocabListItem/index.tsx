import { useState } from "react";
import { styled } from "styled-components";
import { RowData } from "../VocabCardList";
import Toast from "../Toast";

const VocabListItem: React.FC<{
  rowData: RowData;
  hideMeaning: boolean;
  showEnglish: boolean;
  isUserList: boolean;
}> = ({ rowData, hideMeaning, showEnglish, isUserList }) => {
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const [toastMessage, setToastMessage] = useState<string>("");

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage("");
  };

  const toggleExamples = () => {
    setShowExamples(!showExamples);
  };

  const addCookie = () => {
    const existingData: RowData[] =
      JSON.parse(getCookie("userVocabList")) || [];

    const isAlreadyAdded = existingData.some(
      (item) => item.columnB === rowData.columnB
    );

    if (!isAlreadyAdded) {
      const { columnA, columnB, columnC, columnD, columnE, columnF } = rowData;
      const newData: RowData[] = [
        ...existingData,
        { columnA, columnB, columnC, columnD, columnE, columnF },
      ];
      setCookie("userVocabList", JSON.stringify(newData), 365);
      console.log("card added to list");
      showToast("card added");
    } else {
      console.log("already in list");
      showToast("card already in list");
    }
  };

  const removeCookie = () => {
    const existingData: RowData[] =
      JSON.parse(getCookie("userVocabList")) || [];

    const newData: RowData[] = existingData.filter(
      (item) => item.columnB !== rowData.columnB
    );

    setCookie("userVocabList", JSON.stringify(newData), 365);
    console.log("card removed");
    showToast("card removed");
  };

  return (
    <StListItem>
      {isUserList ? (
        <StAddRemButton onClick={removeCookie}>-</StAddRemButton>
      ) : (
        <StAddRemButton onClick={addCookie}>+</StAddRemButton>
      )}
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
      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </StListItem>
  );
};

export const getCookie = (name: string) => {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "";
};

export const setCookie = (
  name: string,
  value: string,
  daysToExpire: number
) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expirationDate.toUTCString()}; path=/`;
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

const StAddRemButton = styled.button`
  display: flex;
  cursor: pointer;
  background-color: #931010;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 8px;
  float: right;
  margin-left: -12px;

  &:hover {
    background-color: #c96d6d;
  }
`;

export default VocabListItem;
