import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { Post } from "../types/post";
import { Fragment } from "react/jsx-runtime";
import { getFeaturedPosts } from "../lib/post-utils";

type HomePageProps = {
  posts: Post[];
};

function HomePage(props: HomePageProps) {
  return (
    <Fragment>
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
