import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './users';

test('Check if users table is rendered', () => {
  const { container, getByText } = render(<Users />)
  expect(getByText('Pages')).toBeInTheDocument();
  
});

test('Check if one user is rendered', () => {
  const { container, getByText } = render(<Users />)
  expect(getByText('Leanne Graham')).toBeInTheDocument();
  
});
