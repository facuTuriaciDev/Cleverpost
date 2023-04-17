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
  selectedPost: any,
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
  selectedPost: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    },
    deletePost: (state, action) => {
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: updatedPosts
      }
    },
    editPost(state, action) {
      const { id, title, body } = action.payload;
      const newPosts = state.posts.map(post => Number(post.id) === Number(id) ? { ...post, title, body } : post);
      state.posts = newPosts;
    },
    selectPost: (state, action ) => {
      state.selectedPost = action.payload;
    },
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

export const { addPost, deletePost, editPost, selectPost } = postSlice.actions;

export default postSlice.reducer;