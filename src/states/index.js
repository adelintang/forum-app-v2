import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
