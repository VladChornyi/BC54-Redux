import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.users;
export const selectFilter = state => state.users.filter;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => users.filter(user => user.name.includes(filter))
);
