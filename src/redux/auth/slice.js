import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { authLogin, authLogout, authSignup } from './operations';

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

// const initialAuth = {
//   user: {
//     name: 'Adrian Cross',
//     email: 'across@mail.com',
//   },
//   token: null,
//   isLoggedIn: true,
//   isRefreshing: false,
// };
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
      .addCase(authSignup.pending, handlePending)
      .addCase(authSignup.rejected, handleRejected)
      .addCase(authSignup.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(authLogin.pending, handlePending)
      .addCase(authLogin.rejected, handleRejected)
      .addCase(authLogin.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(authLogout.pending, handlePending)
      .addCase(authLogout.rejected, handleRejected)
      .addCase(authLogout.fulfilled, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
      });
  },
});

export default slice.reducer;
