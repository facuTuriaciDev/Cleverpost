import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchPosts } from '../../slices/posts/postSlice';
import PostCard from '../../components/PostCard';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import './Home.scss';
import WriteQuotemodal from '../../components/WriteQuoteModal/';

const Home: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const searchTerm = useSelector((state: RootState) => state.search.body);
  const currentTheme = useSelector((state: RootState) => state.theme);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  return (
    <>
      { isModalOpen && <WriteQuotemodal/> }

      <div className={`card-container ${currentTheme}`}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
