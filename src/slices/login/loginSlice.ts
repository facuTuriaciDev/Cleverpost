import { createSlice } from '@reduxjs/toolkit';

interface loginState {
  isAuthenticated: boolean;
  username: string | null;
  token: string | null;
}

const initialState: loginState = {
  isAuthenticated: false,
  username: null,
  token: null,
};

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
      localStorage.setItem('isAuth', 'true');
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = null;
      state.token = null;
      localStorage.removeItem('isAuth');
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
