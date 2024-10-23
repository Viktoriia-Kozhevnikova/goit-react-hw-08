import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '/src/redux/contacts/operations';
import { logout } from '/src/redux/auth/operations';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.contacts.items = []; 
      })
      .addMatcher(
        isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled),
        (state) => {
          state.contacts.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
        (state, action) => {
          state.contacts.loading = false;
          state.contacts.error = action.payload || 'An error occurred';
        }
      );
  },
});

export const contactReducer = slice.reducer;



