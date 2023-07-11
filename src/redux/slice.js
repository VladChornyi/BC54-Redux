import { createSlice, current } from '@reduxjs/toolkit';
import { getUsersThunk, removeUserThunk, setUsersThunk } from './thunks';

const initialState = {
  users: [],
  error: null,
  loading: false,
  filter: '',
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    filterUsersAction: (state, action) => {
      state.filter = action.payload;
    },
  },

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
        state.loading = false;
        state.error = null;
      })
      .addCase(setUsersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(setUsersThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(removeUserThunk.pending, state => {
        state.loading = true;
      })
      .addCase(removeUserThunk.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(user => user.id !== payload);
        state.loading = false;
      })
      .addCase(removeUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;

export const { filterUsersAction } = usersSlice.actions;
