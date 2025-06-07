import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MOKAPI_KEY = import.meta.env.VITE_MOCKAPI_USERID;
const contactsAxios = axios.create({ baseURL: `https://${MOKAPI_KEY}.mockapi.io` });
axios.defaults.baseURL = `https://${MOKAPI_KEY}.mockapi.io`;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await contactsAxios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await contactsAxios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const response = await contactsAxios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
