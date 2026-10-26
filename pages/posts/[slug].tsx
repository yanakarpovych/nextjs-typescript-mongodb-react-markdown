import type { GetStaticPaths, GetStaticProps } from "next";
import { getPostData, getPostsFiles } from "../../lib/post-utils";
import { Post } from "../../types/post";
import PostContent from "../../components/posts/post-detail/post-content";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";

type PostDetailPageProps = {
  post: Post;
};

type PostDetailParams = {
  slug: string;
};

function PostDetailPage({ post }: PostDetailPageProps) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<
  PostDetailPageProps,
  PostDetailParams
> = (context) => {
  const slug = context.params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths<PostDetailParams> = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
