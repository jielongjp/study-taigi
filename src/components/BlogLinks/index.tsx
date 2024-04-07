import { styled } from "styled-components";
import Head from "next/head";
import Link from "next/link";
import BlogPages from "@/utils/BlogPages";

export default function BlogLinks({
  title = "See other blog posts",
}: {
  title?: string;
}) {
  return (
    <>
      <StContainer>
        <StTitle>{title}</StTitle>
        <StLinks>
          {BlogPages.map((page) => (
            <StCard key={page.slug}>
              <Link href={"/blog/" + page.slug}>
                <StCardTitle>{page.title}</StCardTitle>
                <StCardPreview>{page.preview}</StCardPreview>
              </Link>
            </StCard>
          ))}
        </StLinks>
      </StContainer>
    </>
  );
}

const StTitle = styled.h1`
  margin: 8px;
`;

const StContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const StCard = styled.div`
  width: 300px;
  padding: 16px;
  margin: 4px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #e9e9e9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StCardTitle = styled.h2`
  margin-bottom: 8px;
`;

const StCardPreview = styled.p`
  color: #666;
`;
