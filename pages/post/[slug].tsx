import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  Author,
  Categories,
  CommentForm,
  Comments,
  PostDetail,
  PostWidget,
} from "../../components";
import { getPostDetails, getPosts } from "../../services";
import { PostDetailsI, PostsI } from "../../types/posts";

interface Props {
  post: PostDetailsI;
}

const PostDetails: NextPage<Props> = ({ post }) => {
  console.log(post);
  return (
    <div>
      <div className="container mx-auto flex justify-between">
        <div className="w-7/12">
          <PostDetail />
          <Author />
          <CommentForm />
          <Comments />
        </div>
        <div className="w-4/12 sticky top-8 h-36">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostsI[] = await getPosts();

  const paths = posts.map((item) => {
    const slug = item.node.slug;

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;
  const data = await getPostDetails(params?.slug as string);

  return {
    props: {
      post: data,
    },
  };
};
