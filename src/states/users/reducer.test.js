/*
* usersReducer test
*
* should return initial state when action UNKNOWN
* should return users when action RECEIVE_USERS
*/

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer test', () => {
  it('should return initial state when action UNKNOWN', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = usersReducer(initialState, action);

    // expect
    expect(nextState).toEqual(initialState);
  });

  it('should return users when action RECEIVE_USERS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'jane_doe',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // expext
    expect(nextState).toEqual(action.payload.users);
  });
});
