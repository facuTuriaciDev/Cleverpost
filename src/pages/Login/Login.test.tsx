import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import Login from './Login';
import '@testing-library/jest-dom';

describe('Login', () => {
  test('should render', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });

  test('should show error message when wrong credentials are entered', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  
    const usernameInput = getByTestId('username');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');
  
    fireEvent.change(usernameInput, { target: { value: 'wrong' } });
    fireEvent.change(passwordInput, { target: { value: 'wrong' } });
    fireEvent.click(submitButton);
  
    const successMessage = getByTestId('error-message');
    expect(successMessage).toBeInTheDocument();
  });

});
