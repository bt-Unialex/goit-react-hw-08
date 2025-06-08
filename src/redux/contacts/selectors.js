import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoadingContacts = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;
export const selectIsEditing = (state) => state.contacts.isEditing;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) =>
  contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())),
);
