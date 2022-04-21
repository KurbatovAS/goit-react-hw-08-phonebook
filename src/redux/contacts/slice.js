import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://625c013250128c57020a37ea.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://625c013250128c57020a37ea.mockapi.io/contacts/${id}`,
        { method: 'DELETE' }
      );

      if (!response.ok) {
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
      const response = await fetch(
        `https://625c013250128c57020a37ea.mockapi.io/contacts/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server error!");
      }

      const data = await response.json();

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
    [deleteContact.rejected]: setError,
    [createContact.rejected]: setError,
  },
});

const { add, remove } = contactsSlice.actions;
