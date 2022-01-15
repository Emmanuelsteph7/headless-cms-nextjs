import Link from "next/link";
import { useEffect } from "react";
import { useCategories } from "../hooks/usePosts";

const Categories = () => {
  const { loading, data, handleFetch } = useCategories();

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="bg-white p-3 mb-8 rounded-lg shadow-md">
      <h3 className="font-semibold py-2 border-b border-b-dark-light">
        Categories
      </h3>
      {loading ? (
        <img src="/skeleton.gif" alt="" />
      ) : data.length ? (
        data.map((item, index) => (
          <div key={index} className="py-2">
            <Link href={`/category/${item.slug}`}>
              <span className="font-semibold text-dark-main text-lg transition duration-700 hover:text-primary cursor-pointer">
                {item.name}
              </span>
            </Link>
          </div>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default Categories;
