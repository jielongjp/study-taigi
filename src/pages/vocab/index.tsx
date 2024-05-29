import CategoryCardList from "../../components/CategoryCardList";
import CategoryNames from "@/utils/CatergoryNames";
import styled from "styled-components";

export default function VocabIndex() {
  const categoryTotal = Object.keys(CategoryNames).length;
  return (
    <StVocabContainer>
      <h1>Taiwanese Hokkien vocabulary categories</h1>
      <p>
        Here are all the vocabulary lists on this website. <br /> Total of{" "}
        {categoryTotal}
      </p>
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
