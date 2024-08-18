import Head from "next/head";
import VocabCardList from "../components/VocabCardList";
import CategoryCardList from "../components/CategoryCardList";
import { styled } from "styled-components";
import Link from "next/link";

const t = (text: string) => {
  return text && text.trim() !== "" ? text : null;
};

export default function Home({
  translations,
}: {
  translations: Record<string, string>;
}) {
  return (
    <>
      <Head>
        <title>{t(translations.title) || "Default Title"}</title>
        <meta
          name="description"
          content={t(translations.metaDescription) || "Default Description"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <StMain>
        {t(translations.vocabTitle) && (
          <StTitle>{translations.vocabTitle}</StTitle>
        )}
        <CategoryCardList isHome={true} />
        {t(translations.seeAllVocab) && (
          <StText>
            <Link href="/vocab">{translations.seeAllVocab}</Link>
          </StText>
        )}
        {t(translations.newToTaiwanese) && (
          <StText>
            {translations.newToTaiwanese}{" "}
            <Link href="/blog/resources">{translations.learningResources}</Link>
          </StText>
        )}
        {t(translations.getStarted) && (
          <StText>{translations.getStarted}</StText>
        )}
        {t(translations.yourVocabList) && (
          <StText>
            {translations.yourVocabList}{" "}
            <Link href="/vocab/my-list">{translations.yourVocabList}</Link>
          </StText>
        )}
        {t(translations.featuredVocab) && (
          <StText>
            <strong>{translations.featuredVocab}</strong>
          </StText>
        )}
        <VocabCardList
          spreadsheetUrl={spreadsheetURL}
          categoryName="fruit and veg"
        />
        <StTextContainer>
          {t(translations.whatIsTaiwanese) && (
            <h2>{translations.whatIsTaiwanese}</h2>
          )}
          {t(translations.taiwaneseDescription) && (
            <StText>{translations.taiwaneseDescription}</StText>
          )}
          {t(translations.writtenTaiwaneseTitle) && (
            <h3>{translations.writtenTaiwaneseTitle}</h3>
          )}
          {t(translations.writtenTaiwaneseDescription) && (
            <StText>{translations.writtenTaiwaneseDescription}</StText>
          )}
          {t(translations.taiwaneseRomanizationTitle) && (
            <h3>{translations.taiwaneseRomanizationTitle}</h3>
          )}
          {t(translations.taiwaneseRomanizationDescription) && (
            <StText>{translations.taiwaneseRomanizationDescription}</StText>
          )}
          {t(translations.taiwaneseVsMandarinTitle) && (
            <h3>{translations.taiwaneseVsMandarinTitle}</h3>
          )}
          {t(translations.taiwaneseVsMandarinDescription) && (
            <StText>{translations.taiwaneseVsMandarinDescription}</StText>
          )}
          <StLinkBreak />
          {t(translations.readMore) && (
            <StText>
              <Link href="blog">{translations.readMore}</Link>
            </StText>
          )}
        </StTextContainer>
      </StMain>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  let translations;

  try {
    translations = await import(`../locales/${locale}/common.json`);
  } catch (error) {
    translations = await import("../locales/en/common.json");
  }

  return {
    props: {
      translations: translations.default,
    },
  };
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
