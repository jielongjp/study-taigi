import { useState, useEffect } from "react";
import { styled } from "styled-components";
import PhraseTypes from "../../utils/PhraseType";
import Link from "next/link";
import axios from "axios";
import PhraseListItem from "../PhraseListItem";
import { RowData } from "@/utils/types";

export default function PhraseTypeIndex({ isHome }: { isHome: boolean }) {
  const categoryList = Object.keys(PhraseTypes);

  const [phraseData, setPhraseData] = useState<{ [key: string]: RowData[] }>(
    {}
  );

  useEffect(() => {
    categoryList.forEach(async (category) => {
      try {
        const response = await axios.get(PhraseTypes[category].url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");

        const tableRows = doc.querySelectorAll("tbody tr");

        const dataRows: RowData[] = Array.from(tableRows).map((row) => {
          const cells = row.querySelectorAll("td");
          let rowData: RowData = {
            columnA: cells[0]?.textContent || "",
            columnB: cells[1]?.textContent || "",
            columnC: cells[2]?.textContent || "",
            columnD: cells[3]?.textContent || "",
            columnE: cells[4]?.textContent || "",
            columnF: cells[5]?.textContent || "",
          };

          return rowData;
        });

        setPhraseData((prev) => ({
          ...prev,
          [category]: dataRows.slice(0, 10),
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }, []);

  return (
    <StWrapper>
      <div>
        <StPhraseList>
          {categoryList.map((category) => (
            <li key={category}>
              <StPhraseType>
                <h2>
                  {" "}
                  {category
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  phrases
                </h2>
                <StList>
                  {phraseData[category]?.map((rowData, index) => (
                    <PhraseListItem
                      key={index}
                      rowData={rowData}
                      hideMeaning={false}
                      showEnglish={true}
                    />
                  ))}
                </StList>
                <Link href={`/phrases/${category}`}>
                  {" "}
                  See all{" "}
                  {category
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  phrases
                </Link>
              </StPhraseType>
            </li>
          ))}
        </StPhraseList>
      </div>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const StTitle = styled.div`
  margin-bottom: 20px;
`;

const StPhraseList = styled.ul`
  list-style: none;
  padding: 0 12%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    margin: 10px;
  }

  @media (max-width: 400px) {
    li {
      margin-bottom: 5px;
    }

    a {
      padding: 8px 16px;
      font-size: 16px;
      width: 100%;
      height: 100%;
    }
  }
`;

const StList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StPhraseType = styled.div`
  margin-bottom: 24px;
`;
