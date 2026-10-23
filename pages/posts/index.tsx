import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";
import { Post } from "../../types/post";

type AllPostsPageProps = {
  posts: Post[];
};

function AllPostsPage(props: AllPostsPageProps) {
  return <AllPosts posts={props.posts}></AllPosts>;
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
