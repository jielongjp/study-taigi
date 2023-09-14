import { useRouter } from "next/router";
import BlogPost from "../../components/BlogPost";
import BlogPosts from "../../utils/BlogPosts";

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = BlogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;
