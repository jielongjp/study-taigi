import PhraseTypeIndex from "../../components/PhraseListIndex";
import PhraseTypes from "@/utils/PhraseType";
import styled from "styled-components";

export default function PhraseIndex() {
  const categoryTotal = Object.keys(PhraseTypes).length;
  return (
    <StVocabContainer>
      <h1>Taiwanese Hokkien phrase lists</h1>
      <p>
        Here are all the phrase lists on this website. <br /> Total of{" "}
        {categoryTotal}
      </p>
      <PhraseTypeIndex isHome={false} />
    </StVocabContainer>
  );
}

const StVocabContainer = styled.div`
  margin: 8vh 0;
  text-align: center;

  h1,
  p {
    margin: 12px;
  }
`;
