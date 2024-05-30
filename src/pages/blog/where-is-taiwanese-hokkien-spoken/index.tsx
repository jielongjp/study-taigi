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

export default function WhereTaiwaneseIsSpoken() {
  return (
    <>
      <Head>
        <title>Where is Taiwanese Hokkien spoken in Taiwan and Asia</title>
        <meta
          name="description"
          content="Taiwanese Hokkien and Hokkien are spoken around the world, mainly in Southeast Asia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BlogTemplate>
        <StTitle>Where is Taiwanese Hokkien spoken in Taiwan and Asia</StTitle>
        <StImage>
          <img
            src="/img/spoken-taiwanese-hokkien.jpeg"
            alt="Where Taiwanese Hokkien is spoken in Taiwan and Asia"
          />
        </StImage>
        <StParagraph>
          While it might be clear Taiwanese Hokkien is spoken in Taiwan,
          it&apos;s not spoken equally around the country. Generally speaking,
          Taiwanese Hokkien is spoken more in the south of Taiwan, in cities
          like Kaohsiung and Tainan compared to the north such as Taipei. While
          living in Taipei might not give you many opportunities to hear Hokkien
          spoken on the streets, Living in either of the southern cities, or
          more rural areas of Taiwan, you&apos;ll hear Hokkien much more often.
          Around the Taipei area, Taiwanese tends to be spoken a little more
          often when you go further into New Taipei City or around Keelung.
          Yilan is another area in North Taiwan which has a larger
          Hokkien-speaking population than the capital. From around Taichung and
          further south, Taiwanese starts to get much more commonly heard,
          especially in more rural areas of places like Changhua, Chiayi and
          Yunlin, where Taiwanese Hokkien can often be more commonly heard than
          Mandarin.
          <StImage>
            <img
              src="/img/map-of-taiwanese-hokkien.png"
              alt="Where Taiwanese Hokkien is spoken in Taiwan and Asia"
            />
          </StImage>
          <StParagraph>
            This map* gives a good idea of where Taiwanese is spoken more
            commonly within Taiwan. With data collected in 2010, it shows the
            percentage of those aged 6 or older who use Hokkien at home in
            Taiwan. <br></br>
          </StParagraph>
          <StHeading>Taiwanese Hakka</StHeading>
          Viewed more as the strongholds of Taiwanese Hakka, the cities of
          Taoyuan, Hsinchu and Miaoli also have slightly lower populations of
          Hokkien speakers. Here you&apos;ll sometimes hear Hakka spoken,
          especially out of the city centers. While Taiwanese Hokkien is still
          spoken around the area, Mandarin is more common there.
        </StParagraph>
        <StHeading>Other variants of Hokkien</StHeading>
        <StParagraph>
          Apart from just Taiwan, Hokkien is spoken in many other countries too,
          mostly centered around Southeast Asia. Along with where Hokkien
          originated from in Fujian Province, China. Malaysia, Singapore,
          Philippines and Indonesia all have fairly large Hokkien-speaking
          communities, where Hoklo people migrated to. Each of these have
          nuances and some vocabulary that differs between them. For example the
          Hokkien spoken in Penang, Malaysia uses some different words and
          pronunciation such as words added from Malay that can make it a little
          difficult for speakers of Taiwanese Hokkien to understand at times.
          However they are still the same language and are generally mutually
          intelligible.
        </StParagraph>
        <StParagraph>
          <br></br>* Image taken from Wikipedia by user Kanguole.{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            Licensed by CC.
          </a>
        </StParagraph>
      </BlogTemplate>
      <BlogLinks />
    </>
  );
}
