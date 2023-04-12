import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Search {
  body: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    body: ''
  },
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    }
  }
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;