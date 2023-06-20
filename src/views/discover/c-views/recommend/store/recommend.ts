import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend';

const rankingIds = [19723756, 3779629, 2884035];
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

export const fetchRankingDataAction = createAsyncThunk('rankingData', async (arg, { dispatch }) => {
  const promise: Promise<any>[] = [];
  for (const id of rankingIds) {
    promise.push(getPlaylistDetail(id));
  }
  Promise.all(promise).then((res) => {
    const playlists = res.filter((item) => item.playlist).map((item) => item.playlist);
    console.log('飙升榜：', playlists);
    dispatch(changeRankingsAction(playlists));
  });
});

export const fetchSettleSingersAction = createAsyncThunk(
  'SettleSingers',
  async (arg, { dispatch }) => {
    const res = await getArtistList(5);
    dispatch(changeSettleSingersAction(res.artists));
  }
);

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbums: any[];
  rankings: any[];
  settleSingers: any[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
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
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload;
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload;
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

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeSettleSingersAction
} = recommendSlice.actions;
export default recommendSlice.reducer;
