import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { nameFormReducer } from './nameForm-reducer';

const rootReducer = combineReducers({
  nameForm: nameFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
