import Link from "next/link";

const categories = [
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Web Development",
    slug: "webdev",
  },
];

const Header = () => {
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
                <span className="ml-2 cursor-pointer font-medium">
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
