import React from "react";
import { GetStaticProps } from "next";
import DataList from "../../components/VocabCardList";
import CategoryNames from "../../utils/CatergoryNames";
import { styled } from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { StParagraph } from "../../components/BlogTemplate";

interface VocabPageProps {
  categoryName: string;
}

const VocabPage: React.FC<VocabPageProps> = ({ categoryName }) => {
  const spreadsheetUrl = CategoryNames[categoryName].url;
  const is_freq = CategoryNames[categoryName].is_freq;
  const vocab_description = CategoryNames[categoryName].vocab_description;
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
        {is_freq && (
          <>
            <StTitle>{categoryNameSpaces} words</StTitle>
            <StTextContainer>
              <StParagraph>
                This vocabulary list has been made from a list of the top 5000
                Mandarin Chinese words which was used to search and convert to
                the Taiwanese term via sutian.moe.edu.tw. <br /> Due to the
                number of words it has not been completely sorted and the
                English translation for this particular list is mostly machine
                translation. <br />
                <br />
                There are not many frequency based vocabulary lists available
                for Taiwanese Hokkien so I have made and released this one,
                however use it with care, it will most likely be missing some
                common idiomatic Taiwanese and Taiwanese words that don&apos;t
                translate directly with Mandarin. Note also that each Mandarin
                search term only gets one Taiwanese translation. <br /> <br />
                With no simple method to programmatically decide which result
                from sutian.moe.edu.tw is the most common, only the first one is
                used. This may cause some less common translations to get mixed
                in some cases so be aware. Rest assured the translations will be
                correct, due to the great work done at sutian.moe.edu.tw. At
                some time I will try to sort through this list and edit the
                above issues.
                <br /> <br />
                As there are a large number of words in these lists, it may take
                longer to load.
              </StParagraph>
            </StTextContainer>
            <StLinkContainer>
              <StLink>
                <Link href="/vocab/top_4000">top 4000</Link>
              </StLink>
              <StLink>
                <Link href="/vocab/top_500">top 500</Link>
              </StLink>
              <StLink>
                <Link href="/vocab/top_500_to_1000">top 500 to 1000</Link>
              </StLink>
              <StLink>
                <Link href="/vocab/top_1000_to_1500">top 1000 to 1500</Link>
              </StLink>
              <StLink>
                <Link href="/vocab/top_1500_to_2000">top 1500 to 2000</Link>
              </StLink>
              <StLink>
                <Link href="/vocab/top_2000_to_3000">top 2000 to 3000</Link>
              </StLink>
              <StLink>
                <Link href="/vocab/top_3000_to_4000">top 3000 to 4000</Link>
              </StLink>
            </StLinkContainer>
          </>
        )}
        {vocab_description && (
          <>
            <StParagraph>{vocab_description}</StParagraph>
          </>
        )}

        <Link href="/vocab">See all categories</Link>
        <DataList spreadsheetUrl={spreadsheetUrl} categoryName={categoryName} />
        {!is_freq && (
          <StTextContainer>
            <StParagraph>
              List of Taiwanese Hokkien vocabulary for {categoryNameSpaces}{" "}
              related words. Click the audio play button to listen to
              pronunciation. Vocab cards with example sentences will have a
              button that can be clicked to show examples for each word. Use the
              &apos;Test me&apos; to test yourself on each of the words and
              master the {categoryNameSpaces} vocabulary for Taiwanese.
            </StParagraph>
          </StTextContainer>
        )}
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

const StLinkContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const StLink = styled.button`
  background-color: #f0f0f0;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #85a3c3;
  }
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
