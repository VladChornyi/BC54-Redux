import { createSlice, current } from '@reduxjs/toolkit';
import { getUsersThunk, setUsersThunk } from './thunks';

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
        // console.log(current(state));
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
      })
      .addCase(setUsersThunk.fulfilled, (state, { payload }) => {
        state.users = [...state.users, payload];
        state.loading = false;
        state.error = null;
      })
      .addCase(setUsersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(setUsersThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
