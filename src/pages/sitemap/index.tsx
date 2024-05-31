import { styled } from "styled-components";
import Head from "next/head";
import BlogTemplate, { StTitle } from "../../components/BlogTemplate";
import Link from "next/link";

import CategoryNames from "@/utils/CatergoryNames";
import BlogPages from "@/utils/BlogPages";

export default function Sitemap() {
  return (
    <>
      <Head>
        <title>Sitemap</title>
        <meta name="description" content="Sitemap for learntaigi.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BlogTemplate>
        <StTitle>Hokkien Vocabulary Lists</StTitle>
        <StGroup>
          {Object.entries(CategoryNames).map(([key, value]) => (
            <Link key={key} href={`/vocab/${key}`}>
              {key.replace(/_/g, " ")} words
            </Link>
          ))}
          <Link href="/vocab/my-list">My Vocab</Link>
          <Link href="/vocab">Vocab all categories</Link>
        </StGroup>
        <StTitle>Blog Posts</StTitle>{" "}
        <StGroup>
          {BlogPages.map((page) => (
            <Link key={page.slug} href={`/blog/${page.slug}`}>
              {page.title}
            </Link>
          ))}
          <Link href="/blog">Blog home</Link>
        </StGroup>
        <StTitle>Other</StTitle>
        <StGroup>
          <Link href="/about">About this site</Link>
        </StGroup>
      </BlogTemplate>
    </>
  );
}

const StGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
