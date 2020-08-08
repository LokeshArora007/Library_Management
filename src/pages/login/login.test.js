import React from 'react';
import { render, screen, getByRole, getAllByTitle, queryByAttribute, queryAllByAttribute } from '@testing-library/react';
import SignInSide from './login';

test('Check if the fields are present on the Login page', () => {
  const { container, getByText } = render(<SignInSide />);
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});


test('Check if Username validation is working', () => {
    const { container, getByText } = render(<SignInSide />);
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
    //Empty check for username
    username.focus();
    username.blur();
    expect(username
        .closest('.MuiInputBase-root')
        .classList
        .contains('Mui-error')).toBeInTheDocument();

    //Empty check for password
    password.focus();
    password.blur();
    expect(password
        .closest('.MuiInputBase-root')
        .classList
        .contains('Mui-error')).toBeInTheDocument();
  });


  test('Check if form submission fine', () => {
    const { container, getByText } = render(<SignInSide />);
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const submitButton = document.getElementsByTagName('button');

    submitButton.onclick = () => {
        if(oldPassword.value == '' || password.value == ''){
            expect(username).toBeInTheDocument();
            expect(password).toBeInTheDocument();
        }
    }

    submitButton.click();
  });