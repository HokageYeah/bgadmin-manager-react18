import { useAppSelector } from '@/store';
import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { shallowEqual } from 'react-redux';

interface IProps {
  childrens?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  // 从store中获取数据
  const { bannedrs } = useAppSelector(
    (state) => ({
      bannedrs: state.recommend.banners
    }),
    shallowEqual //浅层比较，如果一样就调用render了
  );
  return (
    <div>
      {bannedrs.map((item: any) => {
        return <div key={item.imageUrl}>哈哈哈{item.imageUrl}</div>;
      })}
    </div>
  );
};

export default memo(TopBanner);
