import { RowData } from "@/utils/types";

const generateRandomChoices = (
  rowData: RowData,
  vocabList: RowData[],
  columnName: string
) => {
  let otherColumnValues = vocabList
    .filter((item) => item[columnName] !== rowData[columnName])
    .map((item) => item[columnName]) as string[];

  otherColumnValues = shuffle(otherColumnValues);

  const shuffledChoices = shuffle([
    rowData[columnName] || "",
    ...otherColumnValues.slice(0, 3),
  ]);

  return shuffledChoices;
};

function shuffle(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default generateRandomChoices;
