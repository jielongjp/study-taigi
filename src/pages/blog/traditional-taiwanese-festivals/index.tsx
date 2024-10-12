import Head from "next/head";
import BlogTemplate, {
  StTitle,
  StParagraph,
  StSubtitle,
  StHeading,
  StImage,
} from "../../../components/BlogTemplate";
import BlogLinks from "@/components/BlogLinks";
import Link from "next/link";

export default function TaiwaneseFestivalsInHokkien() {
  return (
    <>
      <Head>
        <title>
          Celebrate Taiwanese Festivals with These Key Phrases in Taiwanese
          Hokkien
        </title>
        <meta
          name="description"
          content="Learn key Taiwanese Hokkien phrases used during traditional festivals like Lunar New Year, Lantern Festival, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BlogTemplate>
        <StTitle>
          Celebrate Taiwanese Festivals with These Key Phrases in Taiwanese
          Hokkien
        </StTitle>
        <StImage>
          {/* <img src="/img/taiwanese-festivals.jpg" alt="Taiwanese Festivals" /> */}
        </StImage>
        <StParagraph>
          Throughout the year Taiwan is home to an array of traditional
          festivals, many of which are celebrated with deep-rooted customs,
          delicious food, and vibrant gatherings. Taiwanese Hokkien is an
          important part of these festivities, with phrases and terms that
          reflect the culture and spirit of each occasion.
        </StParagraph>

        <StSubtitle>Chinese New Year (春節 - Tshun-Tseh)</StSubtitle>
        <StParagraph>
          The most important holiday in Taiwan, Chinese New Year is marked by
          family reunions, feasts, and honoring ancestors. In Hokkien, this
          festival is called Tshun-Tseh or Kuè-nî. Some key phrases you can use
          during this time include:
        </StParagraph>
        <StParagraph>
          <strong>新年快樂 (Sin-nî Kuài-lo̍k)</strong> – Happy New Year!
          <br />
          Sin-nî means New Year, and kuài-lo̍k translates to happiness or joy.
          This is the most common greeting you will hear during the holiday. You
          can also use this greeting for the Western New Year.
        </StParagraph>
        <StParagraph>
          <strong>恭喜發財 (Kiong-hí Huat-tsâi)</strong> – Wishing you
          prosperity
          <br />
          Meaning Congratulations and be prosperous! You will hear it everywhere
          during celebrations.
        </StParagraph>
        <StParagraph>
          <strong>紅包拿來 (Âng-pau lâi-lâi)</strong> – Bring on the red
          envelopes
          <br />
          This playful phrase is used by children hoping to receive red
          envelopes (Âng-pau), which are filled with money for good luck.
        </StParagraph>

        <StSubtitle>Lantern Festival (元宵節 - Guân-siau-tseh)</StSubtitle>
        <StParagraph>
          Celebrated on the fifteenth day of the Lunar New Year, the Lantern
          Festival lights up the night with thousands of glowing lanterns and
          delicious treats like tangyuan (sweet glutinous rice balls). In
          Hokkien, it&apos;s called Guân-siau-tseh, which translates to the
          festival of lanterns. Here are a few key phrases:
        </StParagraph>
        <StParagraph>
          <strong>放天燈 (Pàng-thian-ting)</strong> – Release the sky lanterns.
          <br />
          This phrase refers to the tradition of releasing lanterns into the
          sky, symbolizing hopes and wishes for the coming year.
        </StParagraph>
        <StParagraph>
          <strong>吃湯圓 (Tsia̍h thn̂g-înn)</strong> – Eat tangyuan.
          <br />
          Eating tangyuan (thn̂g-înn) is a key part of the Lantern Festival. The
          round shape of this sweet treat symbolizes family togetherness and
          wholeness.
        </StParagraph>

        <StSubtitle>Dragon Boat Festival (端午節 - Tuan-góo-tseh)</StSubtitle>
        <StParagraph>
          Dragon Boat Festival, or Toan-góo-tseh, is held on the fifth day of
          the fifth lunar month and is celebrated with boat races and the eating
          of zongzi (sticky rice dumplings). Here are some useful Hokkien
          phrases:
        </StParagraph>
        <StParagraph>
          <strong>划龍舟 (Kò lîng-tsiu)</strong> – Row the dragon boat.
          <br />
          Dragon boat races are the highlight of the festival.
        </StParagraph>
        <StParagraph>
          <strong>吃肉粽 (Tsia̍h bah-tsàng)</strong> – Eat zongzi.
          <br />
          Zongzi, or bah-tsàng are a traditional food enjoyed during this
          festival, wrapped in bamboo leaves and filled with savory or sweet
          ingredients.
        </StParagraph>

        <StSubtitle>Mid-Autumn Festival (中秋節 - Tiong-tshiu-tseh)</StSubtitle>
        <StParagraph>
          Also known as the Moon Festival, Tiong-tshiu-tseh is celebrated on the
          15th day of the eighth lunar month. Families gather to admire the full
          moon, eat mooncakes, and enjoy barbecues. Here are some phrases to
          use:
        </StParagraph>
        <StParagraph>
          <strong>吃月餅 (Tsia̍h gue̍h-piánn)</strong> – Eat mooncakes.
          <br />
          Mooncakes, or gue̍h-piánn, are a key part of the Mid-Autumn Festival,
          symbolizing unity and the full moon.
        </StParagraph>
        <StParagraph>
          <strong>賞月 (Siúnn gue̍h)</strong> – Admire the moon.
          <br />
          This phrase refers to the traditional activity of moon-watching, an
          essential part of the celebration.
        </StParagraph>
        <StParagraph>
          <strong>中秋節快樂 (Tiong-tshiu-tseh Kuài-lo̍k)</strong> – Happy
          Mid-Autumn Festival!
          <br />
          This greeting is a great way to wish others well during this festival.
        </StParagraph>

        <StSubtitle>Ghost Festival (中元節 - Tiong-guân-tseh)</StSubtitle>
        <StParagraph>
          The Ghost Festival, or Tiong-guân-tseh, is held during the seventh
          lunar month when it is believed that spirits of the deceased roam the
          earth. Families prepare offerings of food and burn incense to honor
          their ancestors and appease wandering ghosts. Here are some useful
          phrases:
        </StParagraph>
        <StParagraph>
          <strong>拜拜祖先 (Pài-pài tsóo-sian)</strong> – Worship the ancestors.
          <br />
          This phrase is used when making offerings and showing respect to
          ancestors.
        </StParagraph>
        <StParagraph>
          <strong>燒紙錢 (Sio tsuá-tsînn)</strong> – Burn ghost money.
          <br />
          Burning ghost money (tsuá-tsînn) is a common practice during this
          festival, meant to provide for the spirits in the afterlife.
        </StParagraph>
        <StParagraph>
          Want to learn more? Explore our other topics such as{" "}
          <Link href="/vocab/christmas">Christmas related Hokkien vocab</Link>{" "}
        </StParagraph>
      </BlogTemplate>
      <BlogLinks />
    </>
  );
}
