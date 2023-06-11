import hyRequest from '@/services';
import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}
const Recommend: React.FC<IProps> = () => {
  const [banners, setBanners] = useState<any[]>([]);
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners);
        console.log(res);
      });
  }, []);
  return (
    <div>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>;
      })}
    </div>
  );
};
export default memo(Recommend);
