import hyRequest from '@/services';
import { useAppDispatch } from '@/store';
import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { fetchBannerDataAction } from './store/recommend';
import TopBanner from './c-cpns/top-banner';

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
  }, []);

  return (
    <div>
      {/* {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>;
      })} */}
      <TopBanner />
    </div>
  );
};
export default memo(Recommend);
