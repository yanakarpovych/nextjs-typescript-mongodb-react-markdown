import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
import { Post } from "@/types/post";

type PostItemProps = {
  post: Post;
};

function PostItem(props: PostItemProps) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href="">
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200}></Image>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
