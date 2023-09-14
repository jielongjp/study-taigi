interface ContentSection {
  type: 'heading' | 'paragraph';
  content: string;
}

interface BlogPost {
  slug: string;
  title: string;
  sections: ContentSection[];
  date: string;
}

const BlogPosts: BlogPost[]  = [
  {
    slug: 'my-first-post',
    title: 'Learning Taiwanese Resources',
    sections: [
      {
        type: 'heading',
        content: 'Introduction',
      },
      {
        type: 'paragraph',
        content: 'Here are some of the best resources for learning Taiwanese.',
      },
      {
        type: 'heading',
        content: 'Main Content',
      },
      {
        type: 'paragraph',
        content: 'This is the main content of my first blog post.',
      },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt nihil, repellendus omnis odit eaque aspernatur laboriosam eveniet quas quos expedita fugiat architecto velit perspiciatis ex at dolorem recusandae placeat? Nostrum, delectus quod quis at beatae animi quaerat, voluptate odit eum voluptatum necessitatibus consequatur! Commodi iusto, quam perspiciatis laudantium minus illum at non adipisci animi ipsam accusamus labore dolore porro. Debitis architecto maxime, similique necessitatibus harum illum ullam, doloremque error neque expedita quasi officiis sapiente ut porro incidunt perspiciatis reprehenderit accusamus eligendi ad? Repellendus labore voluptate aliquam deleniti ut beatae! Quos voluptate, sed, magnam cumque quas saepe velit nesciunt numquam maxime dignissimos aut dolor quidem similique ut laborum accusantium. Possimus, et ullam a numquam voluptatem porro soluta ipsam officiis culpa! Explicabo voluptates odit ullam! Provident commodi accusantium facere libero qui quasi labore ad atque id voluptatem, modi quaerat pariatur dolores laborum dolor vel, velit dignissimos culpa voluptates placeat nobis aspernatur.',
      },
    ],
    date: '2023-09-11',
  },
];

export default BlogPosts;
