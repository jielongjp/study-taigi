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
          listening practice.
        </StParagraph>
        <StHeading>MOE material</StHeading>
        <StParagraph>
          Taiwan&apos;s Ministry of Education have some resources for learning
          Taiwanese.
        </StParagraph>
      </BlogTemplate>
    </>
  );
}
