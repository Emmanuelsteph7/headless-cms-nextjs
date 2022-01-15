interface Author {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
}

interface Category {
  name: string;
  slug: string;
}

interface FeaturedImage {
  url: string;
}

export interface PostsObjI {
  createdAt: string;
  slug: string;
  excerpt: string;
  title: string;
  author: Author;
  featuredImage: FeaturedImage | null;
  categories: Category[];
}

export interface PostsI {
  node: PostsObjI;
}
