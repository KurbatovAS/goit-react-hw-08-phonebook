import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    set(state, action) {
      return (state = action.payload);
    },
  },
});

export const { set } = filterSlice.actions;
