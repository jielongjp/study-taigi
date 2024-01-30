// for blog index

interface BlogPage {
  slug: string;
  title: string;
  preview?: string;
}

const BlogPages: BlogPage[]  = [
  {
    slug: 'resources',
    title: 'Resources for learning Taiwanese',
    preview: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
  }, 
  {
    slug: 'intermediate-taiwanese',
    title: 'How to Learn Intermediate Taiwanese',
    preview: 'established fact that a content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
  },
];

export default BlogPages;
