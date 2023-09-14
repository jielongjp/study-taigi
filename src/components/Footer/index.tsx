import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StFooterContainer>
      <p>
        Note: Data used for this site comes from{" "}
        <a href="https://sutian.moe.edu.tw/zh-hant/">
          教育部臺灣閩南語常用詞辭典 (MOEs Dictionary of Common Taiwanese
          Hokkien)
        </a>
        <br></br>
        and is licensed under CC (creative commons). 「創用 CC 姓名標示-禁止改作
        3.0 臺灣」
      </p>
    </StFooterContainer>
  );
};

const StFooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

export default Footer;
