import { logIn, logOut, refreshThunk, register } from 'redux/auth/AuthThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
  isAuth: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.profile = payload.user;
};

const handleRejected = state => {
  state.isLoading = false;
  state.error = '';
  state.token = '';
  state.profile = null;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

const handlelogOut = state => {
  state.token = '';
  state.isLoading = false;
  state.profile = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handlelogOut)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(refreshThunk.fulfilled, handleFulfilledProfile)
      .addCase(logIn.pending, handlePending)
      .addCase(refreshThunk.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(refreshThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
