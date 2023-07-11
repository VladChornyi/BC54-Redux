import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectFilteredUsers,
  selectUsers,
} from 'redux/selectors';
import { filterUsersAction } from 'redux/slice';
import { getUsersThunk, removeUserThunk } from 'redux/thunks';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);
  const onDelete = id => {
    dispatch(removeUserThunk(id));
  };
  const filteredUsers = useSelector(selectFilteredUsers);
  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterUsersAction(e.target.value))}
      />
      <ul>
        {filteredUsers.map(el => (
          <li key={el.id}>
            <span>Name:{el.name}</span>
            <span>Email:{el.email}</span>
            <span>Address:{el.address}</span>
            <button type="button" onClick={() => onDelete(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
