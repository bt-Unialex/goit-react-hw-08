import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await authAxios.post('/users/signup', userData);
    authAxios.defaults.headers.common['Authorization'] = response.data.token;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await authAxios.post('/users/login', userData);
    authAxios.defaults.headers.common['Authorization'] = response.data.token;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authAxios.post('/users/logout');
    authAxios.defaults.headers.common['Authorization'] = '';
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (token, thunkAPI) => {
  authAxios.defaults.headers.common['Authorization'] = token;
  try {
    const response = await authAxios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
