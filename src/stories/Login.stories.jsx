import React from 'react';
import { action } from '@storybook/addon-actions';
import Login from '../components/Login';

const stories = {
  title: 'Login',
  component: Login,
};

export function loginClick() {
  return <Login login={action('login click')} />;
}

export default stories;
