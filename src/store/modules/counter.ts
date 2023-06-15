import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  count: number;
  name: string;
}
const initialState: IState = {
  count: 100,
  name: '哈哈哈'
};

const conterSlice = createSlice({
  name: 'counteryy',
  initialState,
  reducers: {
    changeNameAction(state, action: PayloadAction<string>) {
      state.name = action.payload;
    }
  }
});

export default conterSlice.reducer;
export const { changeNameAction } = conterSlice.actions;
