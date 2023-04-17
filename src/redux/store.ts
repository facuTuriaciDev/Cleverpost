import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/posts/postSlice';
import searchReducer from '../slices/posts/searchSlice';
import themeReducer from '../slices/theme/themeSlice';
import modalReducer from '../slices/modal/modalSlice';

const store = configureStore({
  reducer: {
    post: postReducer,
    search: searchReducer,
    theme: themeReducer,
    modal: modalReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;