import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme: () => {
      const theme = document.body.classList.contains('night') ? 'light' : 'night';
      document.body.classList.toggle('night');
      return theme;
    }
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;