import hyRequest from '@/services';
import { useAppDispatch } from '@/store';
import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  fetchRankingDataAction,
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import { RecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';

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
        <div className="right">rightright</div>
      </div>
    </RecommendWrapper>
  );
};
export default memo(Recommend);
