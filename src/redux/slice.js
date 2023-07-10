import { createSlice } from '@reduxjs/toolkit';
import { getUsersThunk } from './thunks';

const initialState = {
  users: [],
  error: null,
  loading: false,
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUsersThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(getUsersThunk.pending, state => {
        state.loading = true;
      });
  },
});

export default usersSlice.reducer;
