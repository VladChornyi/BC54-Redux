import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    adress: '',
    email: '',
  });
  const changeState = ({ target }) => {
    setState(prev => ({ ...prev, [target.name]: target.value }));
  };

  const dispatch = useDispatch();
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
        placeholder="adress"
        name="adress"
        value={state.adress}
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
