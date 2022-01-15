import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { getRecentPosts } from "../services";
import { RecentPostsI } from "../types/posts";

interface Props {
  categories?: string[];
  slug?: string;
}

// we can't use getStaticProps because this isn't a page but a component
const PostWidget: React.FC<Props> = ({ categories, slug }) => {
  const { loading, data: relatedPosts, handleFetch } = usePosts();

  useEffect(() => {
    if (slug) {
      // getSimilarPosts(categories, slug)
      console.log("none");
    } else {
      handleFetch();
    }
  }, [slug]);

  return (
    <div className="bg-white p-3 mb-8 rounded-lg shadow-md">
      <h3 className="font-semibold py-2 border-b border-b-dark-light">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {loading ? (
        <img src="/skeleton.gif" alt="" />
      ) : relatedPosts.length ? (
        relatedPosts.map((item, index) => (
          <div key={index} className="flex items-center py-3">
            <div className="mr-3 flex-none">
              <img
                width={60}
                height={60}
                className="rounded-full"
                src={item.featuredImage?.url || "/empty.jpg"}
                alt=""
              />
            </div>
            <div className="flex-grow flex flex-col">
              <span>{moment(item.createdAt).format("MMM DD, YYYY")}</span>
              <Link href={`/post/${item.slug}`}>
                <span className="font-semibold text-dark-main text-lg transition duration-700 hover:text-primary cursor-pointer">
                  {item.title}
                </span>
              </Link>
            </div>
          </div>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default PostWidget;
