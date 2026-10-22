import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react/jsx-runtime";

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

function HomePage() {
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPosts posts={DUMMY_POSTS}></FeaturedPosts>
    </Fragment>
  );
}

export default HomePage;
