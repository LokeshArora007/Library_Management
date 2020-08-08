import React from 'react';
import { render, screen, getByRole, getAllByTitle, queryByAttribute, queryAllByAttribute } from '@testing-library/react';
import ChangePasswordPage from './changePasswordPage';

test('Check if the fields are present on the page', () => {
  const { container, getByText } = render(<ChangePasswordPage />);
  const oldPassword = document.getElementById('old_password');
  const password = document.getElementById('password');
  const passwordConfirmation = document.getElementById('password_confirmation');
  expect(oldPassword).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(passwordConfirmation).toBeInTheDocument();
});


test('Check if old password validation is working', () => {
    const { container, getByText } = render(<ChangePasswordPage />);
    const oldPassword = document.getElementById('old_password');
    const password = document.getElementById('password');
    const passwordConfirmation = document.getElementById('password_confirmation');
    
    //Empty check for oldPassword
    oldPassword.focus();
    oldPassword.blur();
    expect(oldPassword
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

    //Empty check for password
    passwordConfirmation.focus();
    passwordConfirmation.blur();
    expect(passwordConfirmation
        .closest('.MuiInputBase-root')
        .classList
        .contains('Mui-error')).toBeInTheDocument();
  });


  test('Check if form submission fine', () => {
    const { container, getByText } = render(<ChangePasswordPage />);
    const oldPassword = document.getElementById('old_password');
    const password = document.getElementById('password');
    const passwordConfirmation = document.getElementById('password_confirmation');
    const submitButton = document.getElementsByTagName('button');

    submitButton.onclick = () => {
        if(oldPassword.value == '' || password.value == '' || passwordConfirmation.value == ''){
            expect(oldPassword).toBeInTheDocument();
            expect(password).toBeInTheDocument();
            expect(passwordConfirmation).toBeInTheDocument();
        }
    }

    submitButton.click();
  });