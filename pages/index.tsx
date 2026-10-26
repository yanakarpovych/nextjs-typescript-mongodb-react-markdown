import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { Post } from "../types/post";
import { Fragment } from "react/jsx-runtime";
import { getFeaturedPosts } from "../lib/post-utils";
import Head from "next/head";

type HomePageProps = {
  posts: Post[];
};

function HomePage(props: HomePageProps) {
  return (
    <Fragment>
      <Head>
        <title>Web Development Blog</title>
        <meta name="description" content="Blog about Web Development" />
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
