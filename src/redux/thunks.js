import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUsers, deleteUser, fetchUsers } from 'Requests/Api';

export const getUsersThunk = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUsers();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const setUsersThunk = createAsyncThunk(
  `users/addUser`,
  async (user, { rejectWithValue }) => {
    try {
      const res = await addUsers(user);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeUserThunk = createAsyncThunk(
  `users/removeUser`,
  async (id, { rejectWithValue }) => {
    try {
      await deleteUser(id)
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
