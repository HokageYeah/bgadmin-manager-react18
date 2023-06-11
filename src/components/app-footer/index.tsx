import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  childern?: ReactNode;
}
const AppFooter: FC<IProps> = () => {
  return (
    <div>
      <h2>footer搭建</h2>
    </div>
  );
};
export default memo(AppFooter);
