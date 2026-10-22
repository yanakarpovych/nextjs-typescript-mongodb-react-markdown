import { Post } from '@/types/post';
import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';

type FeaturedPostsProps = {
  posts: Post[];
};

function FeaturedPosts(props: FeaturedPostsProps) {
  return <section className={classes.latest}>
    <h2>Featured Posts</h2>
    <PostGrid posts={props.posts}></PostGrid>
  </section>
}

export default FeaturedPosts;