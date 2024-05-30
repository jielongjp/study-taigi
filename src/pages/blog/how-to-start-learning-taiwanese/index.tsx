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

export default function StartTaiwanese() {
  return (
    <>
      <Head>
        <title>How to Start Learning Taiwanese</title>
        <meta
          name="description"
          content="Want to learn Taiwanese Hokkien but don't know where to start? this guide will begin your Taiwanese language journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BlogTemplate>
        <StTitle>How to Start Learning Taiwanese</StTitle>
        <StImage>
          <img
            src="/img/learning-taiwanese.jpg"
            alt="How to start learning Taiwanese Hokkien"
          />
        </StImage>
        <StParagraph>
          Like any language with difficult pronunciation, it&apos;s best to
          tackle the sounds of the Taiwanese language first. While this can be
          one of the most daunting parts of Taiwanese, learning vocabulary
          without knowing how to pronounce it correctly is not a good use of
          time. It&apos;ll end up taking double the amount of time or more.
        </StParagraph>
        <StParagraph>
          I personally liked both Aiong Taigi&apos;s videos and Bitesize
          Taiwanese pronounce it like a pro series for getting to know Taiwanese
          pronunciation better. Although I&apos;d recommend getting a good grasp
          of the pronunciation and tones (plus the tone changes too), learning
          Taiwanese pronunciation can be slow going and hard to stick in the
          mind. Once you&apos;ve gone through either of those pronunciation
          courses (preferably both), get learning the basic phrases of the
          language. Just make sure not to graduate from pronunciation lessons
          too quickly, while you&apos;re learning phrases and vocabulary
          you&apos;ll need to keep coming back to learning the pronunciation
          rules and nuances unless you are a language genius.
        </StParagraph>
        <StHeading>Set your goal</StHeading>
        <StParagraph>
          Make sure to decide on your main goal for learning the language early
          on to keep the motivation going. Languages are learnt by making it a
          routine, learning a little bit every day if possible. It&apos;s easy
          to get burnt out quickly by studying too hard in the beginning and
          being unable to keep up that amount of study time as a routine.
        </StParagraph>
        <StParagraph>
          Your goal should decide your study method, figure out what you want to
          learn and make a plan to get there and how you&apos;ll do it. Go
          through some of the{" "}
          <Link href="/blog/resources">free or paid resources listed here</Link>{" "}
          and find which ones you like most. Everyone has different learning
          preferences, so the most popular resources might not necessarily be
          your favourite. As resources for learning Taiwanese are quite scarce,
          there isn&apos;t a lot of choice, but you&apos;ve still got a few to
          choose between.
        </StParagraph>
        <StHeading>Listen as much as possible</StHeading>
        <StParagraph>
          With Taiwanese pronunciation being quite difficult for most people,
          I&apos;d advise listening to the language as much as possible, even in
          the beginning. While you won&apos;t catch many words, it gets a good
          feel for the sounds of Taiwanese. You can do this by listening to
          podcasts on spotify or watching Taiwanese dramas. If you&apos;re
          someone who gets frustrated over not understanding anything however,
          you can leave it till you know more basic words. Getting speaking
          practice with a native speaker as early as possible is also a great
          way to learn quickly.
        </StParagraph>
        <StParagraph>
          Once you&apos;re more confident with the pronunciation and have a
          cluster of phrases at your disposal, it&apos;s time to increase your
          vocabulary. Use this site to practice and learn more words in
          Taiwanese, or find a flashcard deck on Anki, and make sure to make it
          a routine
        </StParagraph>
      </BlogTemplate>
      <BlogLinks />
    </>
  );
}
