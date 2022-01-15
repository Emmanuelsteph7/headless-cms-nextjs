import { PostsI } from "../types/posts";
import Link from "next/link";
import moment from "moment";

const Post: React.FC<PostsI> = ({ node }) => {
  const date = moment(node.createdAt).format("MMM DD, YYYY");

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md mb-8">
      <div>
        <img
          className="object-cover w-full"
          src={node.featuredImage?.url || "/empty.jpg"}
          alt=""
        />
      </div>
      <div className="p-2">
        <h3 className="text-center my-2 text-lg font-semibold transition duration-700 hover:text-primary">
          <Link href={`post/${node.slug}`}>{node.title}</Link>
        </h3>
        <div className="flex w-fit mx-auto my-3">
          <div className="flex items-center mr-4">
            <img
              className="mr-2"
              src={node.author.photo.url}
              width="30px"
              height="30px"
              alt=""
            />
            <span className="font-semibold text-dark-main">
              {node.author.name}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-dark-main">{date}</span>
          </div>
        </div>
        <p className="text-center w-10/12 my-2 mx-auto">{node.excerpt}</p>
        <div className="my-5 text-center">
          <Link href={`/post/${node.slug}`}>
            <span className="text-white bg-dark-main transition duration-700 hover:bg-dark-darker cursor-pointer inline-block px-8 py-3 rounded-full">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
