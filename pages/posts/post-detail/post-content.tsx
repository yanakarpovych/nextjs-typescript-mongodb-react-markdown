import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs1",
  title: "Getting started with Next.js",
  image: "getting-started-nextjs.png",
  date: "2026-10-22",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}></PostHeader>
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
