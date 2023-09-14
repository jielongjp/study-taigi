import { styled } from 'styled-components';
import CategoryNames from '../../utils/CatergoryNames';
import Link from 'next/link';

export default function CategoryCardList() {
  return (
    <StWrapper>
      <StTitle>
        <h2>Vocab Categories</h2>
      </StTitle>
      <div>
        <StLinkList>
          {Object.keys(CategoryNames).map((category) => (
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
  padding: 0;
  display: flex;
  justify-content: center;

  li {
    margin: 0 10px; /* Add spacing between cards */
  }

  a {
    display: inline-block;
    font-size: 24px;
    padding: 20px; 30px;
    background-color: #0b5882;
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
      margin-bottom: 5px; /* Reduce spacing between cards on mobile */
    }

    a {
      padding: 8px 16px; /* Adjust padding for mobile */
      font-size: 16px; /* Increase font size for mobile */
    }
  }
`;
