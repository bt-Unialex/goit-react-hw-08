import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import { logout } from '../auth/operations';

const initialContact = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  toast.error(action.payload);
  state.error = action.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState: initialContact,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
      })
      // .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.error = null;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
      }),
});

export default slice.reducer;
