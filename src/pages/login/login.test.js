import React from 'react';
import { render } from '@testing-library/react';
import SignInSide from './login';

test('Check if Login Page is rendered', () => {
  const { container, getByText } = render(<SignInSide />)
  console.log(getByText('Login'));
  expect(getByText('Login')).toBeInTheDocument();
});