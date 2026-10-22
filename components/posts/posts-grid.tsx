import { Post } from "@/types/post";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

type PostGridProps = {
  posts: Post[];
};

function PostGrid(props: PostGridProps) {
  const { posts } = props;

  return <ul className={classes.grid}>
    {posts.map(post => <PostItem key={post.slug} post={post}></PostItem>)}
  </ul>;
}

export default PostGrid;
