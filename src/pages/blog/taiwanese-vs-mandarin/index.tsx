import { styled } from "styled-components";
import Head from "next/head";
import BlogTemplate, {
  StTitle,
  StParagraph,
  StHeading,
  StImage,
} from "../../../components/BlogTemplate";
import Link from "next/link";
import BlogLinks from "@/components/BlogLinks";

export default function TwVsHokkien() {
  return (
    <>
      <Head>
        <title>
          The difference between Taiwanese Hokkien and Mandarin Chinese
        </title>
        <meta
          name="description"
          content="The difference between Taiwanese Hokkien vs Mandarin Chinese."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BlogTemplate>
        <StTitle>The difference between Taiwanese vs Mandarin</StTitle>
        <StImage>
          <img
            src="/img/taiwanese-vs-mandarin.jpeg"
            alt="differences between Taiwanese and Mandarin languages"
          />
        </StImage>
        <StParagraph>
          Taiwanese Hokkien is often just referred to as Taiwanese, even though
          there are several languages used in Taiwan. While Taiwanese and
          Mandarin are both seen as dialects of Chinese, the differences are
          substantial and they are not mutually intelligible. For Mandarin
          speakers who have not grown up hearing Taiwanese Hokkien, it will be
          difficult to understand anything, not that dissimilar to an
          monolingual English speaker trying to understand German or other
          European languages. Many of the words have similar origins in older
          versions of Chinese, but the different tones and pronunciation make it
          hard to catch.
        </StParagraph>
        <StParagraph>
          Hokkien, Hakka, Mandarin, and various Indigenous languages are all
          spoken around Taiwan, but Mandarin is easily the most commonly spoken,
          especially in the north. Despite this, Taiwanese always refers to
          Taiwanese Hokkien and not Taiwanese Mandarin. Hokkien is also spoken
          in mainland China, mainly in Fujian Province, along with scattered
          communities around Southeast Asia.
        </StParagraph>
        {/* <StHeading>
          Linguistic differences between Taiwanese and Mandarin
        </StHeading> */}
        <StParagraph>
          Taiwanese Hokkien is much closer to Old Chinese than Mandarin, an
          varient of Chinese used in Ancient China. In comparison Mandarin
          Chinese went through major changes losing some of the characteristics
          of Old and Middle Chinese. While Mandarin Chinese was used as an
          official language in courts among government appointees from around
          the 16th century, it wasn&apost as commonly spoken by the general
          public for many areas in China, until the Chinese government made it
          the official language of the country in the early 20th century. China
          spent many years promoting Mandarin as the national language and
          pushing the population to learn it to improve literacy rates. While it
          achieved the goal of having one universal Chinese language for
          everyone, the other Chinese dialects like Hokkien and Hakka have been
          slowly decreasing in usage over the years.
        </StParagraph>
        <StParagraph>
          While there are still pockets of Hokkien speaking communities around
          the world such as Southern Taiwan and Singapore, the number of
          speakers is still decreasing as the younger generation have embraced
          Mandarin. Many younger Taiwanese only speak Taiwanese Hokkien with
          their grandparents, some only being able to understand the language
          and not able to speak it.
        </StParagraph>
      </BlogTemplate>
      <BlogLinks />
    </>
  );
}
