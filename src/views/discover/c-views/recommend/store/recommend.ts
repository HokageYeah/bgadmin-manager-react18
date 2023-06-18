import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend';

// 网络请求
export const fetchBannerDataAction = createAsyncThunk('banners', async (arg, { dispatch }) => {
  const res = await getBanners();
  console.log('store数据：', res);
  dispatch(changeBannersAction(res.banners));
  //   return res.banners;
});
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8);
    dispatch(changeHotRecommendsAction(res.result));
  }
);

export const fetchNewAlbumAction = createAsyncThunk('newAlbumyy', async (arg, { dispatch }) => {
  const res = await getNewAlbum();
  dispatch(changeNewAlbumsAction(res.albums));
});

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload;
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload;
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

export const { changeBannersAction, changeHotRecommendsAction, changeNewAlbumsAction } =
  recommendSlice.actions;
export default recommendSlice.reducer;
