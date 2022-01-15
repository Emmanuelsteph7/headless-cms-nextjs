import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Categories, Post, PostWidget } from "../components";
import { getPosts } from "../services";
import { PostsI, PostsObjI } from "../types/posts";

interface Props {
  posts: PostsI[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="">
      <Head>
        <title>Eming Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex justify-between">
        <div className="w-7/12">
          {posts.map((item, index) => {
            return <Post node={item.node} key={index} />;
          })}
        </div>
        <div className="w-4/12 sticky top-8 h-36">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts: PostsI = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
