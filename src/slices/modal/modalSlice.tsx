import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  isNewPost: boolean
}

const initialState: ModalState = {
  isOpen: false,
  isNewPost: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    newPost(state) {
      state.isNewPost = true;
    },
    editPost(state) {
      state.isNewPost = false;
    }
  }
});

export const { openModal, closeModal, newPost, editPost } = modalSlice.actions;

export default modalSlice.reducer;