import { Fragment } from "react/jsx-runtime";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";
import { Post } from "../../types/post";
import Head from "next/head";

type AllPostsPageProps = {
  posts: Post[];
};

function AllPostsPage(props: AllPostsPageProps) {
  return <Fragment>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="All posts"/>
    </Head>
    <AllPosts posts={props.posts}></AllPosts>
  </Fragment>;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
