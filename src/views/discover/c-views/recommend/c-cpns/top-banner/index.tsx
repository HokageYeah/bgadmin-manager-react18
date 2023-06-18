import React, { memo, useRef, useState } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';

import { appShallowEqual, useAppSelector } from '@/store';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';
import { Carousel } from 'antd';
import classNames from 'classnames';

interface IProps {
  childrens?: ReactNode;
}

const TopBanner: FC<IProps> = () => {
  //定义内部数据
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  // 从store中获取数据
  const { bannedrs } = useAppSelector(
    (state) => ({
      bannedrs: state.recommend.banners
    }),
    appShallowEqual //浅层比较，如果一样就调用render了
  );

  /** 事件处理函数 */
  const handleBeforeChange = () => {
    // setCurrentIndex(-1)
  };
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current);
    console.log(current);
  };
  const handlePrevClick = () => {
    bannerRef.current?.prev();
    console.log('handlePrevClick');
  };
  const handleNextClick = () => {
    bannerRef.current?.next();
    console.log('handleNextClick');
  };
  /** 获取背景图片 */
  let bgImageUrl;
  if (currentIndex >= 0 && bannedrs.length > 0) {
    bgImageUrl = bannedrs[currentIndex].imageUrl + '?imageView&blur=40x20';
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={3000}
            ref={bannerRef}
            effect="fade"
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {bannedrs.map((item: any) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {bannedrs.map((item: any, index: number) => {
              return (
                <li key={item.imageUrl}>
                  <span className={classNames('item', { active: index == currentIndex })}></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
