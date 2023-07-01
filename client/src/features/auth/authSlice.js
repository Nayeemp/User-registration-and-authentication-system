/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  user: undefined,
  email: undefined,
  avatar: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.email = action.payload.email;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.email = undefined;
      state.avatar = undefined;
    },

    updateProfile: (state, action) => {
      state.avatar = action.payload;
    }
  }
});

export const { userLoggedIn, userLoggedOut, updateProfile } = authSlice.actions;
export default authSlice.reducer;
