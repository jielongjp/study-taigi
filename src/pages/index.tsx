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
          Learn Taiwanese Hokkien, vocabulary lists and practice cards with
          learntaigi
        </title>
        <meta
          name="description"
          content="Learn Taiwanese Hokkien with the most common vocabulary and vocab categories on learntaigi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <StMain>
        <StTitle>Taiwanese Hokkien Vocabulary</StTitle>
        <CategoryCardList isHome={true} />
        <StText>
          <Link href="/vocab">See all vocab categories</Link>
        </StText>
        <StText>
          New to the Taiwanese language? Have a look at some of the top
          recommended resources <br></br> for learning Taiwanese Hokkien here:{" "}
          <Link href="/blog/resources">Learning Taiwanese Resources</Link>
        </StText>
        <StText>
          Or want to get started right away? check out the featured vocabulary
          list below.
        </StText>
        <StText>
          Or if you&apos;ve been here before, go to your{" "}
          <Link href="/vocab/my-list">own vocabulary list</Link>
        </StText>
        <StText>
          <strong>
            <br></br>This weeks featured Taiwanese vocabulary
          </strong>
        </StText>
        <VocabCardList
          spreadsheetUrl={spreadsheetURL}
          categoryName="fruit and veg"
        />
        <StTextContainer>
          <h2>What is Taiwanese Hokkien?</h2>
          <StText>
            Taiwanese or Taiwanese Hokkien is a language commonly spoken in
            Taiwan and other Chinese/Taiwanese communities around the world.
            Hokkien is often referred to by a number of different names which
            can be confusing for those not familiar with Chinese languages. Some
            of these include Hoklo, Southern Min, Fujianese, Minnan and
            Minnanhua.
          </StText>
          <h3>Written Taiwanese</h3>
          <StText>
            How Taiwanese should be written is often a debate amongst Taiwanese
            speakers and learners. While Taiwan&apos;s Ministry of Education has
            more recently released a list of recommended Chinese characters for
            use with Taiwanese, most people are still unsure which characters to
            use. This means the same word is often written with different
            characters depending on who is writing. This confusion has always
            been a challenge with promoting and teaching Taiwanese and is one
            reason some people prefer to write Taiwanese with the Latin
            alphabet.
          </StText>
          <h3>Taiwanese romanization</h3>
          <StText>
            The most popular ways of written Taiwanese with letters (known as
            romanization or Lomaji) are POJ (Pe̍h-ōe-jī) and Tâi-lô. The former
            was created by missionaries in the 19th century and Tâi-lô was
            created by the Taiwanese government, based off POJ. There are other
            ways of writing Taiwanese, but these are the two most common. Since
            this site uses data from the MOE, Tâi-lô and the recommended
            characters from the government are used here.
          </StText>
          <h3>Taiwanese Hokkien vs Taiwanese Mandarin</h3>
          <StText>
            Although Taiwanese Hokkien is often referred to as simply a dialect,
            it is not mutually intelligible with Mandarin Chinese and Taiwanese
            Mandarin. A Taiwanese person who has not grown up speaking Taiwanese
            or not learnt Taiwanese will not be able to understand Taiwanese
            Hokkien just from Mandarin. Therefore it is often seen as more
            correct to refer to them as separate languages. While we have also
            included the Taiwanese Mandarin characters on this website, the
            focus here is for learning Taiwanese Hokkien. Luckily there are
            plenty of other resources for learning Mandarin online, whereas
            Taiwanese has much fewer resources.
          </StText>
          <StLinkBreak />
          <StText>
            To read more <Link href="blog">check out our blog.</Link>
          </StText>
        </StTextContainer>
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

const StTextContainer = styled.div`
  margin: 0 24px;
  text-align: left;
`;

const StLinkBreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: #555555;
  margin: 20px 0;
`;
