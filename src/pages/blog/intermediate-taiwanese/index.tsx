import { styled } from "styled-components";
import Head from "next/head";
import BlogTemplate, {
  StTitle,
  StParagraph,
  StSubtitle,
  StHeading,
  StImage,
} from "../../../components/BlogTemplate";
import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";

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
        <StImage>
          <img
            src="/resources-taiwanese.webp"
            alt="Books and resources for learning intermediate and advanced Taiwanese Hokkien"
          />
        </StImage>
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
        <StHeading>This site</StHeading>
        <StParagraph>
          Start to <Link href="/">learn intermediate Taiwanese Hokkien</Link>{" "}
          here. This site was created partly due to the lack of resources for
          learning intermediate Taiwanese online and provide some higher level
          vocabulary.
        </StParagraph>
        <StHeading>Youtube</StHeading>
        <StParagraph>
          Searching for learning Taiwanese on Youtube doesn&apos;t reveal much
          apart from the most basic content in English. However there are a
          number of channels using Taiwanese that appear when searching in
          Mandarin Chinese.
          <a href="https://www.youtube.com/channel/UCZnjTNz5olPNhqMRVEdP4kA">
            無事做巴士
          </a>{" "}
          this channel is great for getting listening practice and often has
          subtitles on their videos.
        </StParagraph>
      </BlogTemplate>
      <BlogLinks />
    </>
  );
}
