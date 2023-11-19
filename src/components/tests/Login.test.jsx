/**
 * skenario testing
 *
 * - Login component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import Login from '../Login';

expect.extend(matchers);

describe('Login component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<Login login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('masukkan email');

    // action
    await userEvent.type(emailInput, 'example@test.com');

    // assert
    expect(emailInput).toHaveValue('example@test.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<Login login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('masukkan password');

    // action
    await userEvent.type(passwordInput, 'passwordtest');

    // assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<Login login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('masukkan email');
    await userEvent.type(emailInput, 'example@test.com');
    const passwordInput = await screen.getByPlaceholderText('masukkan password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByText('Login');

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'example@test.com',
      password: 'passwordtest',
    });
  });
});
