import { styled } from "styled-components";
import Head from "next/head";
import BlogTemplate, {
  StTitle,
  StParagraph,
  StSubtitle,
  StHeading,
} from "../../../components/BlogTemplate";

export default function IntermediateTw() {
  return (
    <>
      <Head>
        <title>How to Learn Intermediate Taiwanese</title>
        <meta
          name="description"
          content="How to Learn Intermediate Taiwanese. Resources for learning intermediate and advanced Taiwanese Hokkien online."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BlogTemplate>
        <StTitle>Learning Taiwanese at intermediate to advanced level</StTitle>
        <StParagraph>
          While learning Taiwanese resources are few and far between, advanced
          material for learning Taiwanese is even scarcer. Here are some of the
          best ways to learn more advanced Taiwanese Hokkien online.
        </StParagraph>
        <StHeading>Podcasts completely in Taiwanese</StHeading>
        <StParagraph>
          There are a number of podcasts that speak 100% are almost all
          Taiwanese Hokkien which are great for intermediate to advanced
          listening practice. I like this one for casual practice:{" "}
          <a href="https://open.spotify.com/show/1839iTni8QXQ7zR6HYoE4G">
            邊友愛講話pîng-iú ài kóng-uē
          </a>
          . Although the audio is not too great at times. <br></br>
          Another good one is{" "}
          <a href="https://spotify.link/2azXyLGZPDb">台灣人台灣事</a>, which has
          much better audio quality.
        </StParagraph>
        <StHeading>MOE material</StHeading>
        <StParagraph>
          Taiwan&apos;s Ministry of Education have some resources for learning
          Taiwanese. In particular this one is great with the advanced books
          having lots of advanced listening practice (click on the headings
          above the passage for the audio link):{" "}
          <a href="https://www.huayuworld.org/taiwanese-download.php">
            Beginner to Advanced Material for Taiwanese
          </a>
        </StParagraph>
      </BlogTemplate>
    </>
  );
}