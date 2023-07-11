import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { getUsersThunk, removeUserThunk } from 'redux/thunks';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);
  const onDelete = (id) => {
    dispatch(removeUserThunk(id));
  }

  return (
    <ul>
      {users.map(el => (
        <li key={el.id}>
          <span>Name:{el.name}</span>
          <span>Email:{el.email}</span>
          <span>Address:{el.address}</span>
          <button type="button" onClick={() => onDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Users;
