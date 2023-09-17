import React from "react";
import { GetStaticProps } from "next";
import DataList from "../../components/VocabCardList";
import CategoryNames from "../../utils/CatergoryNames";
import { styled } from "styled-components";

interface VocabPageProps {
  categoryName: string;
}

const VocabPage: React.FC<VocabPageProps> = ({ categoryName }) => {
  const spreadsheetUrl = CategoryNames[categoryName];

  return (
    <div>
      <StTitle>Taiwanese Hokkien Vocab</StTitle>
      <DataList spreadsheetUrl={spreadsheetUrl} categoryName={categoryName} />
    </div>
  );
};

const StTitle = styled.h1`
  margin: 8px;
  text-align: center;
`;

export async function getStaticPaths() {
  const paths = Object.keys(CategoryNames).map((category) => ({
    params: { category },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const categoryName = params.category as string;

  return {
    props: {
      categoryName,
    },
  };
};

export default VocabPage;
