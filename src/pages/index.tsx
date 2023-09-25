import Head from "next/head";
import VocabCardList from "../components/VocabCardList";
import CategoryCardList from "../components/CategoryCardList";
import { styled } from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Learn Taiwanese Hokkien, vocabulary lists and practice cards.
        </title>
        <meta
          name="description"
          content="Learn Taiwanese Hokkien with the most common vocabulary and vocab categories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <StMain>
        <StTitle>Taiwanese Hokkien Vocab</StTitle>
        <CategoryCardList isHome={true} />
        <StText>
          <Link href="/vocab">See all categories</Link>
        </StText>
        <StText>
          New to the Taiwanese language? Have a look at some of the top
          recommended resources <br></br> for learning Taiwanese Hokkien here:{" "}
          <Link href="/blog/resources">Learning Taiwanese Resources</Link>
        </StText>
        <StText>
          <strong>
            <br></br>This weeks featured vocabulary
          </strong>
        </StText>
        <VocabCardList
          spreadsheetUrl={spreadsheetURL}
          categoryName="fruit and veg"
        />
      </StMain>
    </>
  );
}

const spreadsheetURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSf2CHodZ6hYigjqYwqdIY8p_ZsJI5LFUTYhhie-69E4bkTBjpUXkhoYox5_4CDW3WEZEmN4xhECfpF/pubhtml?gid=1626957566&single=true";

const StTitle = styled.h1`
  margin: 8px;
`;
const StText = styled.p`
  margin: 8px 6px;
  a {
    color: #093f78;

    &:hover {
      color: #1272d8;
    }
  }
`;

const StMain = styled.main`
  text-align: center;
`;
