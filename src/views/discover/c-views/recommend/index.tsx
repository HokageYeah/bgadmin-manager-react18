import hyRequest from '@/services';
import { useAppDispatch } from '@/store';
import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  fetchRankingDataAction,
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchSettleSingersAction
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import { RecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';
import UserLogin from './c-cpns/user-login';
import SettleSinger from './c-cpns/settle-singer';
import HotAnchor from './c-cpns/hot-anchor';

interface IProps {
  children?: ReactNode;
}
const Recommend: React.FC<IProps> = () => {
  // const [banners, setBanners] = useState<any[]>([]);
  // useEffect(() => {
  //   hyRequest
  //     .get({
  //       url: '/banner'
  //     })
  //     .then((res) => {
  //       setBanners(res.banners);
  //       console.log(res);
  //     });
  // }, []);
  // 发起action 获取数据
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommendAction());
    dispatch(fetchNewAlbumAction());
    dispatch(fetchRankingDataAction());
    dispatch(fetchSettleSingersAction());
  }, []);

  return (
    <RecommendWrapper>
      {/* {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>;
      })} */}
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
