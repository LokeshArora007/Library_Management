import React from 'react';
import { render, screen, getByRole, getAllByTitle, queryByAttribute, queryAllByAttribute } from '@testing-library/react';
import DynamicPages from './dynamicPages';

test('Check if users table is rendered', () => {
  const { container, getByText } = render(<DynamicPages />);
  expect(getByText('Pages')).toBeInTheDocument();
});


test('Check if one Book is rendered', () => {
  const { container, getByText } = render(<DynamicPages />);
  expect(getByText('Marijn Haverbeke')).toBeInTheDocument();
  expect(getByText('Addy Osmani')).toBeInTheDocument();
  expect(getByText('Eric Elliott')).toBeInTheDocument();
});


test('Check if book selection is working', () => {
  const { container, getByText } = render(<DynamicPages />);
  const userCheckbox = document.querySelector('.MuiCheckbox-root');
  userCheckbox.click();
  expect(userCheckbox.classList.contains('Mui-checked')).toBe(true);
});
