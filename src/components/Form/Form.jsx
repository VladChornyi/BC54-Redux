import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersThunk, setUsersThunk } from 'redux/thunks';

const Form = () => {
  // const [state, setState] = useState({
  //   name: '',
  //   address: '',
  //   email: '',
  // });
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const userMap = { name: setName, address: setAddress, email: setEmail };

  const dispatch = useDispatch();
  const changeState = ({ target }) => {
    userMap[target.name](target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setUsersThunk({ name, address, email }))
      .unwrap()
      .then(() => dispatch(getUsersThunk()));
    setName('');
    setAddress('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={changeState}
      />
      <input
        type="text"
        placeholder="address"
        name="address"
        value={address}
        onChange={changeState}
      />
      <input
        type="email"
        placeholder="mail"
        name="email"
        value={email}
        onChange={changeState}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
