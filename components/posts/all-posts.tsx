import { Post } from "@/types/post";
import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid";

type AllPostsProps = {
  posts: Post[];
};

function AllPosts(props: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts}></PostGrid>
    </section>
  );
}

export default AllPosts;
