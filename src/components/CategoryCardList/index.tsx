import { styled } from "styled-components";
import CategoryNames from "../../utils/CatergoryNames";
import Link from "next/link";

export default function CategoryCardList({ isHome }: { isHome: boolean }) {
  const categoryList = isHome
    ? Object.keys(CategoryNames).slice(0, 12)
    : Object.keys(CategoryNames);

  return (
    <StWrapper>
      <StTitle>
        <h2>Categories</h2>
      </StTitle>
      <div>
        <StLinkList>
          {categoryList.map((category) => (
            <li key={category}>
              <Link href={`/vocab/${category}`}>{category}</Link>
            </li>
          ))}
        </StLinkList>
      </div>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const StTitle = styled.div`
  margin-bottom: 20px;
`;

const StLinkList = styled.ul`
  list-style: none;
  padding: 0 12%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    margin: 10px;
  }

  a {
    display: inline-block;
    font-size: 24px;
    padding: 20px; 30px;
    background-color: #093563;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 400px) {
    li {
      margin-bottom: 5px;
    }

    a {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
`;
