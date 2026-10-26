import { Post } from "@/types/post";
import Image from "next/image";
import classes from "./post-header.module.css";

type PostHeaderProps = Pick<Post, "title" | "image">;

function PostHeader(props: PostHeaderProps) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150}></Image>
    </header>
  );
}

export default PostHeader;
