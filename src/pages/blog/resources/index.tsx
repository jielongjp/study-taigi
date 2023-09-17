import { styled } from "styled-components";

export default function Resources() {
  return (
    <StContainer>
      <StTitle>Resources for learning Taiwanese</StTitle>
      <StHeading>Most recommended</StHeading>
      <StParagraph>
        While there aren&apos;t a lot of resources, a few standout books and
        sites are available for learning Taiwanese Hokkien in English.<br></br>{" "}
        Here are some of the best ones i&apos;ve come across while learning.
      </StParagraph>
      <StHeading>Bite Size Taiwanese</StHeading>
      <StParagraph>
        Although there really isn&apos;t much choice when it comes to podcasts
        for learning the Taiwanese language, luckily this one is really well
        made and a joy to listen to. It&apos;s easy to tell a lot of planning
        went into this podcast as lessons are well structured and full of
        knowledge. There are also extra paid materials that can be bought such
        as worksheets and a vocabulary book, Short Takes: A Scene-based
        Taiwanese Vocabulary Builder. I just wish they had continued with a few
        more seasons.
      </StParagraph>
      <StHeading>
        Southern Hokkien: An Introduction (three textbooks) by SOAS
      </StHeading>
      <StParagraph>
        For a textbook I&apos;d recommend either this one or the Maryknoll
        textbook written below. Both have good parts and bad parts to them. For
        these books, I was a bit disappointed that the dialogues have no audio
        (vocab and grammar examples only). Also the numbered tones instead of
        tone markers, while are fine early on, become a little distracting later
        on, especially for those also wanting to learn to read other materials
        in Taiwanese. I was also hoping for a nicer layout and style for a
        modern textbook, but found it not that much improved on the very old
        Maryknoll books. I found the books to be full of great content however
        with lots of explanations for the learner.
      </StParagraph>
      <StParagraph></StParagraph>

      <StHeading>Maryknoll Taiwanese</StHeading>
      <StParagraph>
        The content in them is great, but often catered more to teaching for
        Christian preachers and you&apos;ll find a lot of vocab related to that.
        The conversations are still relevant for any learners though and
        it&apos;s only a few words here and there. The books are a little old
        and can be harder to read for those used to modern publications.
      </StParagraph>
      <StHeading>Reddit r/ohtaigi</StHeading>
      <StParagraph>
        There&apos;s lots of information in this subreddit aimed for learners of
        Taiwanese. <br></br>
        <a href="https://www.reddit.com/r/ohtaigi/">
          Learning Taiwanese subreddit
        </a>
      </StParagraph>

      <StHeading>
        Taiwanese Grammar: A Concise Reference by Philip T. Lin
      </StHeading>
      <StParagraph>
        Don&apos;t be fooled by the title, this book is the most in depth guide
        to Taiwanese grammar you&apos;ll find. The book is really well written
        and not as difficult to read as some grammar books can be. Philip Lin is
        also one of the co-hosts of Bitesize Taiwanese.
      </StParagraph>
      <StHeading>Taikegui, Taiwanese song lyrics</StHeading>
      <StParagraph>
        A website with a large collection of song lyrics written in Taiwanese.
        While some sites often just have the characters only, this one uses POJ
        too. A great resource for those who like learning through music.
        <a href="https://taikegui.wordpress.com">taikegui website</a>
      </StParagraph>
      <StSubtitle>
        Other resources for learning Taiwanese worth a mention
      </StSubtitle>
      <StHeading>Glossika</StHeading>
      <StParagraph>
        Although it offers a nice UI and fun method of learning, I&apos;ve heard
        some of the sentences used are not so commonly used and often sound a
        little strange.
      </StParagraph>
      <StHeading>Anki</StHeading>
      <StParagraph>
        Not just for Taiwanese, anki is a great flashcard learning app for any
        language. There are a few flashcard sets (decks) for Taiwanese there.
        I&apos;d recommend using one with sound files attatched.
      </StParagraph>
      <StHeading>Memrise</StHeading>
      <StParagraph>
        Similar to anki, memrise is a flashcard learning app/website. There are
        fewer Taiwanese sets here but the interface is a little nicer.
      </StParagraph>
      <StHeading></StHeading>
      <StParagraph></StParagraph>
      <StHeading></StHeading>
      <StParagraph></StParagraph>
      <StParagraph></StParagraph>
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
  margin: 10px 0;
  text-align: center;
`;

const StSubtitle = styled.h2`
  font-size: 22px;
  margin: 10px 0;
  text-align: center;
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
