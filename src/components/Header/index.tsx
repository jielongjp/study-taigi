import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <StHeaderContainer>
      <StNav>
        <ul>
          <li>
            <Link href="/">Learn Taigi</Link>
          </li>
          {router.pathname === "/" || router.pathname.startsWith("/blog/") ? (
            <li className="-about">
              <Link href="/about">About</Link>
            </li>
          ) : (
            <li className="-about">
              <Link href="/vocab/my-list">My Vocab</Link>
            </li>
          )}
          {/* <li>
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
    position: relative;
    align-items: center;
  }

  li {
    margin: 0;
    padding-right: 12px;
  }

  .-about {
    position: absolute;
    right: 4px;

    @media (max-width: 800px) {
      margin: 5px 2%;
      padding-left: 10px;
      border-left: 1px solid;
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default Header;
