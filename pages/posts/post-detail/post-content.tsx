import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { Post } from "@/types/post";

type PostContentProps = {
  post: Post;
};

function PostContent(props: PostContentProps) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}></PostHeader>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
