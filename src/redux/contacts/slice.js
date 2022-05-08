import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/contacts');

      if (response.statusText !== 'OK') {
        throw new Error('Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      if (response.statusText !== 'OK') {
        throw new Error("Can't delete contact. Server error!");
      }

      dispatch(remove({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async function (contact, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.post(`/contacts`, contact);

      if (response.statusText !== 'Created') {
        console.log('Выполнился if при создании контакта');
        throw new Error("Can't add contact. Server error!");
      }

      const data = await response.data;

      dispatch(add(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setPending = state => {
  state.status = 'loading';
  state.error = 'null';
};

const setFulfilled = (state, action) => {
  state.status = 'resolved';
  state.contactsList = action.payload;
};

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
    status: null,
    error: null,
  },
  reducers: {
    add(state, action) {
      state.contactsList.push(action.payload);
    },
    remove(state, action) {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: setFulfilled,
    [fetchContacts.rejected]: setError,
    [deleteContact.rejected]: setPending,
    [deleteContact.rejected]: setFulfilled,
    [deleteContact.rejected]: setError,
    [createContact.rejected]: setPending,
    [createContact.rejected]: setFulfilled,
    [createContact.rejected]: setError,
  },
});

const { add, remove } = contactsSlice.actions;
