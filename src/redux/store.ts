import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/posts/postSlice';

const store = configureStore({
  reducer: {
    post: postReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;