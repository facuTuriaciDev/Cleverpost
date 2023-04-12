import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchPosts } from '../../slices/posts/postSlice';
import Card from '../../components/PostCard';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import './Home.scss';

const Home: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const searchTerm = useSelector((state: RootState) => state.search.body);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  return (
    <div className='card-container'>
      {filteredPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;