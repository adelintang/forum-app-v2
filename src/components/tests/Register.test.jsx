/**
 * skenario testing
 *
 * - Register component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import Register from '../Register';

expect.extend(matchers);

describe('Register component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // arrange
    render(<Register register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('masukkan nama');

    // action
    await userEvent.type(nameInput, 'nametest');

    // assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<Register register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('masukkan email');

    // action
    await userEvent.type(emailInput, 'example@test.com');

    // assert
    expect(emailInput).toHaveValue('example@test.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<Register register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('masukkan password');

    // action
    await userEvent.type(passwordInput, 'passwordtest');

    // assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = vi.fn();
    render(<Register register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('masukkan nama');
    await userEvent.type(nameInput, 'nametest');
    const emailInput = await screen.getByPlaceholderText('masukkan email');
    await userEvent.type(emailInput, 'example@test.com');
    const passwordInput = await screen.getByPlaceholderText('masukkan password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByText('Register');

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'example@test.com',
      password: 'passwordtest',
    });
  });
});
