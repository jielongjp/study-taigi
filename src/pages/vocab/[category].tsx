import React from "react";
import { GetStaticProps } from "next";
import VocabList from "../../components/VocabCardList";
import CategoryNames from "../../utils/CatergoryNames";
import { styled } from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { StParagraph } from "../../components/BlogTemplate";

interface VocabPageProps {
  categoryName: string;
  vocabList: [];
}

const VocabPage: React.FC<VocabPageProps> = ({ categoryName, vocabList }) => {
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
        <VocabList vocabList={vocabList} categoryName={categoryName} />
        <StTextContainer>
          <StParagraph>
            List of Taiwanese Hokkien vocabulary for {categoryNameSpaces}{" "}
            related words. Click the audio play button to listen to
            pronunciation. Vocab cards with example sentences will have a button
            that can be clicked to show examples for each word. Use the
            &apos;Test me&apos; to test yourself on each of the words and master
            the {categoryNameSpaces} vocabulary for Taiwanese.
          </StParagraph>
        </StTextContainer>
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

const StTextContainer = styled.div`
  margin: 0 24px;
  text-align: left;
`;

export async function getStaticPaths() {
  const paths = Object.keys(CategoryNames).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const categoryName = params.category as string;

  try {
    const vocabList = require(`../../utils/data/vocab/${categoryName}.json`);

    return {
      props: {
        categoryName,
        vocabList,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);

    return {
      props: {
        categoryName,
        vocabList: [],
      },
    };
  }
};

export default VocabPage;
