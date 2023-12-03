import CategoryCardList from "../../components/CategoryCardList";
import styled from "styled-components";

export default function VocabIndex() {
  return (
    <StVocabContainer>
      <h1>Taiwanese Hokkien vocabulary categories</h1>
      <p>Here are all the vocabulary lists on this website.</p>
      <CategoryCardList isHome={false} />
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
