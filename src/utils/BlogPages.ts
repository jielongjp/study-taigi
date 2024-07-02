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
  {
    slug: "where-is-taiwanese-hokkien-spoken",
    title: "Where is Taiwanese Hokkien spoken",
    preview:
      "Taiwanese Hokkien and other varients of Hokkien are spoken mostly around Southeast Asia but with some differences.",
  },
  {
    slug: "learn-taiwanese-with-music",
    title: "Learn Taiwanese With Music and Songs",
    preview:
      "The easiest and most fun way to learn Taiwanese is by using music and your favorite songs.",
  },
  {
    slug: "traditional-taiwanese-food",
    title: "Traditional Taiwanese Food",
    preview: "Learn names of popular traditional Taiwanese foods in Hokkien",
  },
];

export default BlogPages;
