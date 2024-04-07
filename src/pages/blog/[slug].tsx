import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import BlogPosts from "../../utils/BlogPosts";
import BlogTemplate from "@/components/BlogTemplate";
import { StTitle } from "@/components/BlogTemplate";
import BlogLinks from "@/components/BlogLinks";

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = BlogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <>
        <BlogTemplate>
          <StTitle>Post not found</StTitle>
        </BlogTemplate>
        <BlogLinks />
      </>
    );
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;
