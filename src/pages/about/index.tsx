import { styled } from "styled-components";

export default function About() {
  return (
    <StContainer>
      <StTitle>About this site</StTitle>
      <StHeading>Origin</StHeading>
      <StParagraph>
        I created this website mainly due to a lack of learning material for
        Taiwanese Hokkien. <br></br> Data is collected from the MOE Dictionary
        of Common Taiwanese Hokkien, a free dictionary made by the Taiwanese
        Ministry of Education, using a web scraper to search from vocabulary
        lists in Node JS. Vocabulary lists come from various free resources
        around the web.
      </StParagraph>
      <StParagraph>
        As the dictionary does not currently offer English search, Mandarin
        Chinese is used (meaning most of the interface needs to be in Chinese)
      </StParagraph>
      <StParagraph>
        This website is fairly new and I do not have a lot of spare time for
        upkeep so there are still a lot of small issues.
      </StParagraph>
      <StHeading>Open source</StHeading>
      <StParagraph>
        This project is open source, if you have an idea for a feature feel free
        to get in touch. If you want to use this project as a base to create
        something else, feel free. Some attribution somewhere in your project
        would be great.
      </StParagraph>
      <StHeading>About me (the author)</StHeading>

      <StParagraph>
        I&apos;m a web developer who spent about 14 years living in Asia. After
        learning Mandarin Chinese and Japanese to a high level. I noticed a lack
        of materials and language promotion for Taiwanese Hokkien, especially
        for common vocabulary lists and so created this site.
        <br></br>
        <br></br>To see more or get in touch check out my personal website
        below.
      </StParagraph>
      <StParagraph>
        <a href="https://jordharris.com"> Jordan Harris web developer</a>
        <br></br>
        <a href="https://github.com/jielongjp"> Github</a>
      </StParagraph>
    </StContainer>
  );
}

const StContainer = styled.div`
  max-width: 800px;
  margin: 5px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    margin: 5px 2%;
  }
`;

const StTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const StHeading = styled.h2`
  font-size: 20px;
  margin-top: 20px;
`;

const StParagraph = styled.p`
  font-size: 16px;
  margin: 10px 0;
  a {
    color: #052445;

    &:hover {
      color: #0056b3;
    }
  }
`;
