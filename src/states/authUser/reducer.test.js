/*
* authUserReducer test
*
* should return initial state when action UNKNOWN
* should return authUser when action SET_AUTH_USER
* should return null when action UNSET_AUTH_USER
*/

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

describe('authUserReducer test', () => {
  it('should return initial state when action UNKNOWN', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // expect
    expect(nextState).toEqual(initialState);
  });

  it('should return authUser when action SET_AUTH_USER', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // expect
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when action UNSET_AUTH_USER', () => {
    // arrange
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };

    const action = {
      type: 'UNSET_AUTH_USER',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // expect
    expect(nextState).toEqual(null);
  });
});
