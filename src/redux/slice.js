import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});
