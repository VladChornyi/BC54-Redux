import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://63c7e1d3075b3f3a91d50f37.mockapi.io',
});

export const fetchUsers = async () => {
  const { data } = await usersApi.get('/users');
  return data;
};

export const addUsers = async user => {
  const { data } = await usersApi.post('/users', user);
  return data;
};

// GET
// /users/:id

// POST
// /users

// PUT
// /users/:id

// DELETE
// /users/:id
