import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PagesIcon from '@material-ui/icons/Pages';
import { MainLayout } from '../layout';
import ChangePasswordIcon from '@material-ui/icons/VpnKey';
import {
  LoginPage,
  ForgotPasswordPage,
  ChangePasswordPage,
  HomePage,
  DynamicPages,
  DynamicPageAdd
} from '../pages';

export const routes = [
  {
    label: 'Login',
    path: '/login',
    page: LoginPage,
    requireAuth: false,
    asMenu: false,
  },
  {
    label: 'ForgotPassword',
    path: '/forgotpassword',
    page: ForgotPasswordPage,
    requireAuth: false,
    asMenu: false,
  },
  {
    label: 'Home',
    path: '/',
    page: HomePage,
    layoutType: MainLayout,
    requireAuth: true,
    asMenu: true,
    icon: <HomeIcon />,
  },
  {
    label: 'Pages',
    path: '/pages',
    page: DynamicPages,
    layoutType: MainLayout,
    requireAuth: true,
    asMenu: true,
    icon: <PagesIcon />,
  },
  {
    label: 'Add Pages',
    path: '/pages/add',
    page: DynamicPageAdd,
    layoutType: MainLayout,
    requireAuth: true
  },
  {
    label: 'Add Pages',
    path: '/pages/:id',
    page: DynamicPageAdd,
    layoutType: MainLayout,
    requireAuth: true
  },
  {
    label: 'ChangePassword',
    path: '/changepassword',
    page: ChangePasswordPage,
    layoutType: MainLayout,
    requireAuth: true,
    asMenu: true,
    icon: <ChangePasswordIcon />,
  }
  
];
