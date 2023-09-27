import { TypeApplicationResponse } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface applicationsState {
  value: TypeApplicationResponse[];
}

const initialState: applicationsState = {
  value: [],
};

export const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setApplications: (
      state,
      action: PayloadAction<TypeApplicationResponse[]>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setApplications } = applicationsSlice.actions;

export default applicationsSlice.reducer;
