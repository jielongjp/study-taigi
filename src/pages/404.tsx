import BlogLinks from "@/components/BlogLinks";
import BlogTemplate from "@/components/BlogTemplate";
import CategoryCardList from "@/components/CategoryCardList";

export default function Custom404() {
  return (
    <>
      <BlogTemplate>
        <h1>404 - Page Not Found</h1>
      </BlogTemplate>
      <BlogLinks title="Looking for blog posts?" />
      <CategoryCardList isHome={true} />
    </>
  );
}
