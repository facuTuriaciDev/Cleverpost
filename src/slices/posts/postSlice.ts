import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    //TODO addPost, deletePost, editPost
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default postSlice.reducer;