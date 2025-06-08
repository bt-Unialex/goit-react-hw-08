import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { login, logout, refreshUser, register } from './operations';

const handlePending = (state) => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  toast.error(action.payload);
};

// {
//   "name": "Adrian Cross",
//   "email": "acrossorca@mail.com",
//   "password": "examplepwd12345"
//   "token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQ0ODBlMmM0OTVlZDZlMjVmNDMzYjAiLCJpYXQiOjE3NDkzMTk5MDZ9.jifF8Bc86F1g_fiE_gMyicATsnC6xTDSeEFA9NcmPrI,
// }

const initialAuth = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.rejected, handleRejected)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      });
  },
});

export default slice.reducer;
