import { useState } from "react";
import { getCategories, getRecentPosts } from "../services";
import { CategoriesI, RecentPostsI } from "../types/posts";

export const usePosts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<RecentPostsI[]>([]);

  const handleFetch = () => {
    getRecentPosts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        Promise.reject();
        setLoading(false);
      });
  };

  return { loading, data, handleFetch };
};

export const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CategoriesI[]>([]);

  const handleFetch = () => {
    getCategories()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        Promise.reject();
        setLoading(false);
      });
  };

  return { loading, data, handleFetch };
};
