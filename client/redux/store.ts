import registerReducer from './features/registerSlice';
import currentUserReducer from './features/currentUserSlice';
import { configureStore } from '@reduxjs/toolkit';
// ...

export const store = configureStore({
  reducer: { registerReducer, currentUserReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
