import ReactMarkdown, { type Components } from "react-markdown";
import Image from "next/image";
import type { Post } from "@/types/post";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

type PostContentProps = {
  post: Post;
};

function PostContent({ post }: PostContentProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents: Components = {
    p({ children, ...props }) {
      const containsImage = Array.isArray(children)
        ? children.some(
            (child) =>
              typeof child === "object" &&
              child !== null &&
              "type" in child &&
              child.type === "img",
          )
        : false;

      if (containsImage) {
        return <div className={classes.image}>{children}</div>;
      }

      return <p {...props}>{children}</p>;
    },

    img({ src, alt }) {
      if (typeof src !== "string") {
        return null;
      }

      const imageSrc = src.startsWith("/")
        ? src
        : `/images/posts/${post.slug}/${src}`;

      return <Image src={imageSrc} alt={alt ?? ""} width={600} height={300} />;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
