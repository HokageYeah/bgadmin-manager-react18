import React, { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

interface propsType {
  yuye: number[];
}
const StyledDiv = styled.div`
  /* 样式属性 */
  height: 380px;
  width: 30%;
  margin: 20px auto;
  overflow: scroll;
  border: 1px solid black;
  .virtual-list-phantom {
    float: left;
  }
  .virtual-list-item {
    box-sizing: border-box;
    height: 30px;
    margin: 10px 10px 0px 10px;
    border: 5px solid red;
  }
`;
const Children = memo((props: propsType) => {
  const { yuye } = props;
  const virtualRef = useRef(null);
  const virtualContentRef = useRef(null);
  const [isShowItem] = useState(true);
  const [start, setStart] = useState(0);
  const startRef = useRef(start);
  startRef.current = start;
  const [visibleCount, setVisibleCount] = useState(0);
  // 使用泛型指定类型为 string[]
  const [visiblData, setVisibleData] = useState<number[]>([]);
  const onHandleScroll = () => {
    const scrolltop = (virtualRef.current as unknown as HTMLDivElement).scrollTop;
    const fixedScrollTop = scrolltop - (scrolltop % 40);
    (
      virtualContentRef.current as unknown as HTMLDivElement
    ).style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;
    const countStart = Math.floor(scrolltop / 40);
    setStart(countStart);
    setVisibleData(yuye.slice(countStart, countStart + visibleCount));
    console.log(yuye.slice(countStart, countStart + visibleCount));
    console.log(scrolltop, fixedScrollTop, countStart, start, startRef.current);
  };
  // []空数组表示谁的影响都不受，只会首次执行一次
  useEffect(() => {
    // 获取父元素的高度 这里使用c3的盒模型
    const height = (virtualRef.current as unknown as HTMLDivElement).clientHeight;
    // 获取屏幕能够显示多少个元素
    const count = Math.ceil(height / 40);
    // 获取首次加载屏幕内元素
    setVisibleCount(count);
    setVisibleData(yuye.slice(start, start + count));
    console.log(height, count, yuye.slice(start, start + count));
  }, []);
  const clickBtn = () => {
    console.log('点击可大量的卡上了');
  };
  return (
    <StyledDiv ref={virtualRef} onScroll={onHandleScroll} onClick={clickBtn}>
      <div className="virtual-list-phantom" style={{ height: yuye.length * 40 + 'px' }}></div>
      <div ref={virtualContentRef}>
        {visiblData.map((item) => (
          <div className={classNames({ 'virtual-list-item': isShowItem })} key={item}>
            ---{item}
          </div>
        ))}
      </div>
    </StyledDiv>
  );
});
Children.displayName = 'children';
export default Children;
