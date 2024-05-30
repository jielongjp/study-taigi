import React, { ReactNode } from "react";
import styled from "styled-components";

interface BlogTemplateProps {
  children: ReactNode;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ children }) => {
  return <StContainer>{children}</StContainer>;
};

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

export const StTitle = styled.h1`
  font-size: 24px;
  margin: 10px 0;
  text-align: center;
`;

export const StSubtitle = styled.h2`
  font-size: 22px;
  margin: 10px 0;
  text-align: center;
`;

export const StHeading = styled.h2`
  font-size: 20px;
  margin-top: 20px;
`;

export const StParagraph = styled.p`
  font-size: 16px;
  margin: 10px 0;
  a {
    color: #052445;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const StImage = styled.div`
  margin-bottom: 20px;
  text-align: center;
  img {
    max-height: 60vh;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default BlogTemplate;
