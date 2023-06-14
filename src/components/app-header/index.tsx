import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import headerTitles from '@/assets/data/header_titles.json';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface IProps {
  children?: ReactNode;
}
const AppHeader: FC<IProps> = () => {
  // 组件展示逻辑
  function showItem(item: any) {
    if (item.type === 'path') {
      // NavLink 默认是有active的状态的
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      );
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/#">
            網易雲音樂
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
          {/* <Link to={'/discover'}>发现音乐</Link>
          <Link to={'/mine'}>我的音乐</Link>
          <Link to={'/focus'}>关注</Link>
          <Link to={'/download'}>下载客户端</Link> */}
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          ></Input>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};
export default memo(AppHeader);
