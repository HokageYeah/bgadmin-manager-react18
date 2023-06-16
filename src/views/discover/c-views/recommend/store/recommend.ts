import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

// 网络请求
export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getBanners();
  console.log('store数据：', res);
  dispatch(changeBannersAction(res.banners));
  //   return res.banners;
});
interface IRecommendState {
  banners: any;
}
const initialState: IRecommendState = {
  banners: []
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    }
  }
  //   方式一
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchBannerDataAction.pending, (state, action) => {
  //         console.log('pending');
  //       })
  //       .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //         console.log('结束了---', payload);
  //         state.banners = payload;
  //       })
  //       .addCase(fetchBannerDataAction.rejected, () => {
  //         console.log('reject');
  //       });
  //   }
});

export const { changeBannersAction } = recommendSlice.actions;
export default recommendSlice.reducer;
