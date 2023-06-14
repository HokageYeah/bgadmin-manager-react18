import React, { memo, Suspense } from 'react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './c-cpns/nav-bar';
interface Iprops {
  children?: ReactNode;
}

const Discover: React.FC<Iprops> = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* 导航占位符， 类似于vue中的router-view */}
      <Suspense fallback="排行榜加载中......">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
