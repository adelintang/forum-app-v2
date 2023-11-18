/*
* isPreloadReducer test
*
* should return initial state when action UNKNOWN
* should return false when action SET_IS_PRELOAD
*/

import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';

describe('isPreloadReducer test', () => {
  it('should return initial state when action UNKNOWN', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // expect
    expect(nextState).toEqual(initialState);
  });

  it('should return false when action SET_IS_PRELOAD', () => {
    // arrange
    const initialState = true;
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // expect
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
