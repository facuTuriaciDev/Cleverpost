import { useState, useEffect } from 'react';
import { Post } from '../slices/posts/postSlice';

type UseFilterPostsProps = {
  posts: Post[];
  searchTerm: string;
};

const useFilterPosts = ({ posts, searchTerm }: UseFilterPostsProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
      || post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  return filteredPosts;
};

export default useFilterPosts;