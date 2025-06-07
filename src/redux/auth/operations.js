import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://connections-api.goit.global',
  // headers: { Authorization: AUTH_TOKEN },
});

export const authSignup = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
  try {
    const response = await authAxios.post('/users/signup', userData);
    authAxios.defaults.headers.common['Authorization'] = response.data.token;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authLogin = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await authAxios.post('/users/login', userData);
    authAxios.defaults.headers.common['Authorization'] = response.data.token;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authLogout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authAxios.post('/users/logout');
    authAxios.defaults.headers.common['Authorization'] = '';
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
