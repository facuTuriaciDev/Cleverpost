import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/posts/postSlice';
import searchReducer from '../slices/posts/searchSlice';

const store = configureStore({
  reducer: {
    post: postReducer,
    search: searchReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;