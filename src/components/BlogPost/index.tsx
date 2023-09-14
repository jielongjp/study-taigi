import React from 'react';
import styled from 'styled-components';

interface Section {
  type: 'heading' | 'paragraph';
  content: string;
}

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    sections: Section[];
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <StBlogPostContainer>
      <StBlogPostTitle>{post.title}</StBlogPostTitle>
      <StBlogPostDate>{post.date}</StBlogPostDate>
      {post.sections.map((section, index) => {
        if (section.type === 'heading') {
          return <StHeading key={index}>{section.content}</StHeading>;
        } else if (section.type === 'paragraph') {
          return <StParagraph key={index}>{section.content}</StParagraph>;
        }
        return null;
      })}
    </StBlogPostContainer>
  );
};

const StBlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const StBlogPostTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const StBlogPostDate = styled.p`
  font-size: 14px;
  color: #777;
`;

const StHeading = styled.h2`
  font-size: 20px;
  margin-top: 20px;
`;

const StParagraph = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

export default BlogPost;
