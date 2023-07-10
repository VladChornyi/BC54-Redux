import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    address: '',
    email: '',
  });
  const dispatch = useDispatch();
  const changeState = ({ target }) => {
    setState(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={state.name}
        onChange={changeState}
      />
      <input
        type="text"
        placeholder="address"
        name="address"
        value={state.address}
        onChange={changeState}
      />
      <input
        type="email"
        placeholder="mail"
        name="email"
        value={state.email}
        onChange={changeState}
      />
      <button type="submit"></button>
    </form>
  );
};

export default Form;
