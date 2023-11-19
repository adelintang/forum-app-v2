/*
* leaderboardsUserReducer test
*
* should return initial state when action UNKNOWN
* should return leaderboards when action RECEIVE_LEADERBOARDS
*/

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsUserReducer test', () => {
  it('should return initial state when action UNKNOWN', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // expect
    expect(nextState).toEqual(initialState);
  });

  it('should return leaderboards when action RECEIVE_LEADERBOARDS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // expect
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
