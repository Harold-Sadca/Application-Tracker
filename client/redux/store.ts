import registerReducer from './features/registerSlice';
import currentUserReducer from './features/currentUserSlice';
import applicationsReducer from './features/applicationsSlice';
import { configureStore } from '@reduxjs/toolkit';
// ...

export const store = configureStore({
  reducer: { registerReducer, currentUserReducer, applicationsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
