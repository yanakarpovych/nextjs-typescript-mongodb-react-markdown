import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Next.js is a React framework for production...",
    date: "2026-10-22",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Next.js is a React framework for production...",
    date: "2026-10-22",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Next.js is a React framework for production...",
    date: "2026-10-22",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Next.js is a React framework for production...",
    date: "2026-10-22",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS}></AllPosts>;
}

export default AllPostsPage;
