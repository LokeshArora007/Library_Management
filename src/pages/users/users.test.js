import React from 'react';
import { render, screen, getByRole, getAllByTitle, queryByAttribute, queryAllByAttribute } from '@testing-library/react';
import Users from './users';

test('Check if users table is rendered', () => {
  const { container, getByText } = render(<Users />)
  expect(getByText('Pages')).toBeInTheDocument();
});


test('Check if one user is rendered', () => {
  const { container, getByText } = render(<Users />)
  expect(getByText('Leanne Graham')).toBeInTheDocument();
  expect(getByText('Bret')).toBeInTheDocument();
  expect(getByText('Sincere@april.biz')).toBeInTheDocument();
});


test('Check if book selection is working', () => {
  const { container, getByText } = render(<Users />)
  const userCheckbox = document.querySelector('.MuiCheckbox-root');
  userCheckbox.click();
  expect(userCheckbox.classList.contains('Mui-checked')).toBe(true);
});
