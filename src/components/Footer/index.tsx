import styled from "styled-components";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <StFooterContainer>
      <p>
        Note: Data used for the Learn Taigi site comes from{" "}
        <a href="https://sutian.moe.edu.tw/zh-hant/">
          教育部臺灣閩南語常用詞辭典 (MOEs Dictionary of Common Taiwanese
          Hokkien)
        </a>
        <br></br>
        and is licensed under CC (creative commons). 「創用 CC 姓名標示-禁止改作
        3.0 臺灣」
      </p>
      <StSitemap>
        {" "}
        <Link href="/sitemap">Sitemap</Link>
      </StSitemap>
    </StFooterContainer>
  );
};

const StFooterContainer = styled.footer`
  background-color: #052445;
  color: #fff;
  text-align: center;
  padding: 1rem;
  a {
    color: #59b2f7;
  }
`;

const StSitemap = styled.div`
  padding-top: 6px;
  margin-top: 6px;
  a {
    border-top: 1px solid #ffb916c2;
    padding: 0 20px 0 20px;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export default Footer;
