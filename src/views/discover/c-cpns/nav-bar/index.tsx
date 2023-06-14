import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavWrapper } from './style';
import { discoverMenu } from '@/assets/data/local_data';
import { Link, NavLink } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}

{
  /* <div>
<Link to={'/discover/recommend'}>推荐</Link>
<Link to={'/discover/ranking'}>排行榜</Link>
<Link to={'/discover/songs'}>歌单</Link>
<Link to={'/discover/djradio'}>主播电台</Link>
<Link to={'/discover/artist'}>歌手</Link>
<Link to={'/discover/album'}>新碟上架</Link>
</div> */
}
const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};
export default memo(NavBar);
