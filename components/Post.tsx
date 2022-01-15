import { PostsI } from "../types/posts";
import Link from "next/link";
import moment from "moment";

const Post: React.FC<PostsI> = ({ node }) => {
  const date = moment(node.createdAt).format("MMM DD, YYYY");

  return (
    <div className="p-2 bg-white rounded shadow mb-4">
      <div>
        <img
          className="object-cover w-full"
          src={node.featuredImage?.url || "/empty.jpg"}
          alt=""
        />
      </div>
      <h3 className="text-center my-2 text-lg font-semibold">
        <Link href={`post/${node.slug}`}>{node.title}</Link>
      </h3>
      <div className="flex w-fit mx-auto my-2">
        <div className="flex items-center mr-3">
          <img
            className="mr-2"
            src={node.author.photo.url}
            width="30px"
            height="30px"
            alt=""
          />
          <span>{node.author.name}</span>
        </div>
        <div className="flex items-center">
          <span>{date}</span>
        </div>
      </div>
      <p className="text-center w-10/12 my-2 mx-auto">{node.excerpt}</p>
    </div>
  );
};

export default Post;
