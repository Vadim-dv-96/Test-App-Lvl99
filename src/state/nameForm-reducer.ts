import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userName: [] as string[],
};

const slice = createSlice({
  name: 'nameForm',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<{ userName: string }>) => {
      state.userName = [action.payload.userName];
      if (!!state.userName) {
        localStorage.setItem('name', JSON.stringify(state.userName));
      }
    },
  },
});

export const { setUserName } = slice.actions;
export const nameFormReducer = slice.reducer;
