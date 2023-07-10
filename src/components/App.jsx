import { Provider } from 'react-redux';
import Form from './Form/Form';
import { store } from 'redux/store';
import Users from './Users/Users';

export const App = () => {
  return (
    <>
      <Form />
      <Users />
    </>
  );
};
