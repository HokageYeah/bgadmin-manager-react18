import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { RankingItemWrapper } from './style';
interface IProps {
  children?: ReactNode;
  itemData: any;
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props;
  const { tracks = [] } = itemData;
  return <RankingItemWrapper>{itemData.name}</RankingItemWrapper>;
};
export default memo(TopRankingItem);
