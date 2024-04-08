// for blog index and links

interface BlogPage {
  slug: string;
  title: string;
  preview?: string;
}

const BlogPages: BlogPage[] = [
  {
    slug: "resources",
    title: "Resources for learning Taiwanese",
    preview:
      "While there aren't a lot of resources, here are a few standout books and sites are available for learning Taiwanese Hokkien in English.",
  },
  {
    slug: "intermediate-taiwanese",
    title: "How to Learn Intermediate Taiwanese",
    preview:
      "Taiwanese resources are few and far between and advanced material for learning Taiwanese is even scarcer. Here is a handy list to help you out.",
  },
  {
    slug: "how-to-start-learning-taiwanese",
    title: "How to Start Learning Taiwanese",
    preview:
      "Want to learn Taiwanese Hokkien but don't know where to start? this guide will begin your Taiwanese language journey.",
  },
  {
    slug: "taiwanese-vs-mandarin",
    title: "Taiwanese Hokkien vs Mandarin",
    preview: "The differences between Taiwanese Hokkien and Taiwanese Mandarin",
  },
];

export default BlogPages;
