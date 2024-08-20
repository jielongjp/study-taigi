import React from "react";
import { GetStaticProps } from "next";
import DataList from "../../components/PhraseCardList";
import PhraseTypes from "@/utils/PhraseType";
import { styled } from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { StParagraph } from "../../components/BlogTemplate";

interface PhrasePageProps {
  categoryName: string;
}

const PhrasePage: React.FC<PhrasePageProps> = ({ categoryName }) => {
  const spreadsheetUrl = PhraseTypes[categoryName].url;
  const nameSpacesAndUpper = categoryName
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const metaDescription = `Taiwanese phrase list for ${nameSpacesAndUpper}. Learn ${nameSpacesAndUpper} phrases in Taiwanese Hokkien with English and Mandarin`;

  return (
    <>
      <Head>
        <title>
          {`Taiwanese Hokkien ${nameSpacesAndUpper} phrases, intermediate and
          advanced.`}
        </title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <StContainer>
        <StTitle>Taiwanese Hokkien {nameSpacesAndUpper} Phrases</StTitle>

        <Link href="/phrases">See all phrase categories</Link>
        <DataList spreadsheetUrl={spreadsheetUrl} categoryName={categoryName} />
        <StTextContainer>
          <StParagraph>
            List of Taiwanese Hokkien phrases related to {nameSpacesAndUpper}.
            Click the audio play button to listen to pronunciation.
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
  margin: 0 10%;
  text-align: left;
`;

export async function getStaticPaths() {
  const paths = Object.keys(PhraseTypes).map((phrasetype) => ({
    params: { phrasetype },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const categoryName = params.phrasetype as string;

  return {
    props: {
      categoryName,
    },
  };
};

export default PhrasePage;
