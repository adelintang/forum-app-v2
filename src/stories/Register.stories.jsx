import React from 'react';
import { action } from '@storybook/addon-actions';
import Register from '../components/Register';

const stories = {
  title: 'Register',
  component: Register,
};

export function registerClick() {
  return <Register register={action('register click')} />;
}

export default stories;
