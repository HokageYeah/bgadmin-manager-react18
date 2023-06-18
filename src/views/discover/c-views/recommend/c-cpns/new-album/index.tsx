import React, { memo, useRef } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';
import { AlbumWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { Carousel } from 'antd';
import { useAppSelector } from '@/store';
interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  // 定义内部数据
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  /** redux中获取数据 */
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums
  }));
  // 事件处理函数
  const handlePrevClick = () => {
    bannerRef.current?.prev();
    console.log('handlePrevClick');
  };
  const handleNextClick = () => {
    bannerRef.current?.next();
    console.log('handleNextClick');
  };
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <h1 key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <span key={album.id}>{album.name}</span>;
                    })}
                  </div>
                </h1>
              );
            })}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  );
};
export default memo(NewAlbum);
