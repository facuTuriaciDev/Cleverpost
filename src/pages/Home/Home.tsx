import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchPosts } from '../../slices/posts/postSlice';
import PostCard from '../../components/PostCard';
import { ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import './Home.scss';
import WriteQuotemodal from '../../components/WriteQuoteModal/';
import useFilterPosts from '../../hooks/useFilterPosts';

const Home: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, PayloadAction> = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const searchTerm = useSelector((state: RootState) => state.search.body);
  const currentTheme = useSelector((state: RootState) => state.theme);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const filteredPosts = useFilterPosts({ posts, searchTerm });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
