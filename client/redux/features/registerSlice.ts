import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: Boolean;
}

const initialState: CounterState = {
  value: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<Boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoginState } = registerSlice.actions;

export default registerSlice.reducer;
