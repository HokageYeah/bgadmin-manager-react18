import { createSlice } from '@reduxjs/toolkit';
export const a = 1;

interface IRecommendState {
  banners: any;
}
const initialState: IRecommendState = {
  banners: []
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
});

export default recommendSlice.reducer;
