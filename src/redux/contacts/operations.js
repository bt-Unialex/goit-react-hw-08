import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk('contacts/update', async (userData, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${userData.id}`, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// -------------------for mockapi.io API------------------------------------------
// const MOKAPI_KEY = import.meta.env.VITE_MOCKAPI_USERID;
// const contactsAxios = axios.create({ baseURL: `https://${MOKAPI_KEY}.mockapi.io` });
// axios.defaults.baseURL = `https://${MOKAPI_KEY}.mockapi.io`;
