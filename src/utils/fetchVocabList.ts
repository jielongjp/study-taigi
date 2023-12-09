import { promises as fsPromises } from "fs";

export async function fetchVocabList(vocabCategory: string): Promise<any> {
  try {
    const filePath = `../utils/data/vocab/${vocabCategory}.json`;
    const data = await fsPromises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
