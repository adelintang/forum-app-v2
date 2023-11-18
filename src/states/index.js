import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
