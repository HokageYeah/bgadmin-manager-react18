import React, { memo } from 'react';
import type { ReactNode } from 'react';
import ChildrenIntersectionObserver from '@/components/ChildrenIntersectionObserver';
import ChildrenScrollList from '@/components/ChildrenScrollList';

interface IProps {
  children?: ReactNode;
}
const ScrollView: React.FC<IProps> = () => {
  console.log();
  const nameAry = [];
  for (let i = 0; i < 100; i++) {
    nameAry.push(i);
  }
  return (
    <div>
      <ChildrenScrollList yuye={nameAry}></ChildrenScrollList>
      <ChildrenIntersectionObserver yuye={nameAry} height={195}></ChildrenIntersectionObserver>
    </div>
  );
};
export default memo(ScrollView);
