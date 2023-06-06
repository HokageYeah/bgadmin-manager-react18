import React, { memo, Suspense } from 'react';
import type { ReactNode } from 'react';
import { Outlet, Link } from 'react-router-dom';
interface Iprops {
  children?: ReactNode;
}

const Discover: React.FC<Iprops> = () => {
  return (
    <div>
      <div>
        <Link to={'/discover/recommend'}>推荐</Link>
        <Link to={'/discover/ranking'}>排行榜</Link>
        <Link to={'/discover/songs'}>歌单</Link>
        <Link to={'/discover/djradio'}>主播电台</Link>
        <Link to={'/discover/artist'}>歌手</Link>
        <Link to={'/discover/album'}>新碟上架</Link>
      </div>
      {/* 导航占位符， 类似于vue中的router-view */}
      <Suspense fallback="排行榜加载中......">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
