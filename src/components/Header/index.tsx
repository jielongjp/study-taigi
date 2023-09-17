import Link from "next/link";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StHeaderContainer>
      <StNav>
        <ul>
          <li>
            <Link href="/">Learn Taiwanese Home</Link>
          </li>
          {/* <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li> */}
        </ul>
      </StNav>
    </StHeaderContainer>
  );
};

const StHeaderContainer = styled.header`
  background-color: #052445;
  color: #fff;
  padding: 1rem;
`;

const StNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default Header;
