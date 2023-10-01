import React from "react";
import { GetStaticProps } from "next";
import DataList from "../../components/VocabCardList";
import CategoryNames from "../../utils/CatergoryNames";
import { styled } from "styled-components";
import Link from "next/link";
import Head from "next/head";

interface VocabPageProps {
  categoryName: string;
}

const VocabPage: React.FC<VocabPageProps> = ({ categoryName }) => {
  const spreadsheetUrl = CategoryNames[categoryName];
  const categoryNameSpaces = categoryName.replace(/_/g, " ");
  const metaDescription = `Taiwanese vocabulary list for ${categoryNameSpaces}. Learn ${categoryNameSpaces} words in Taiwanese Hokkien with English and Mandarin`;

  return (
    <>
      <Head>
        <title>
          Taiwanese Hokkien {categoryNameSpaces} words and vocab test
        </title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>{" "}
      <StContainer>
        <StTitle>Taiwanese Hokkien Vocab</StTitle>
        <Link href="/vocab">See all categories</Link>
        <DataList spreadsheetUrl={spreadsheetUrl} categoryName={categoryName} />
      </StContainer>
    </>
  );
};

const StTitle = styled.h1`
  margin: 8px;
`;

const StContainer = styled.div`
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
