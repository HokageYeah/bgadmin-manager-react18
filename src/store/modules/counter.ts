import { createSlice } from '@reduxjs/toolkit';

const conterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: '哈哈哈'
  },
  reducers: {
    changeNameAction(state, { payload }) {
      state.name = payload;
    }
  }
});

export default conterSlice.reducer;
export const { changeNameAction } = conterSlice.actions;
