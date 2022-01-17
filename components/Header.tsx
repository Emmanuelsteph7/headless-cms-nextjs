import Link from "next/link";
import { useEffect } from "react";
import { useCategories } from "../hooks/usePosts";

const Header = () => {
  const { loading, data: categories, handleFetch } = useCategories();

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <header className="mb-5">
      <div className="container border-b border-white flex justify-between items-center py-5 mx-auto">
        <div>
          <Link href="/">
            <span className="cursor-pointer text-3xl">Eming Blog</span>
          </Link>
        </div>
        <nav>
          {categories.map((item, index) => {
            return (
              <Link key={index} href={`/category/${item.slug}`}>
                <span className="ml-3 cursor-pointer font-semibold transition duration-700 hover:text-primary">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
