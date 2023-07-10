import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from 'Requests/Api';

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
