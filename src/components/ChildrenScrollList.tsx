import React, { memo, useRef } from 'react';
import styled from 'styled-components';

interface propsType {
  yuye: number[];
}
const StyledDiv = styled.div`
  /* 样式属性 */
  height: 288px;
  width: 30%;
  margin: 20px auto;
  overflow: scroll;
  border: 1px solid black;
`;
const Children = memo((props: propsType) => {
  const { yuye } = props;
  const virtualContentRef = useRef(null);
  const onHandleScroll = () => {
    const scrolltop = (virtualContentRef.current as unknown as HTMLDivElement).scrollTop;
    console.log(scrolltop);
  };
  const clickBtn = () => {
    console.log('点击可大量的卡上了');
  };
  return (
    <StyledDiv className="virtual-list" ref={virtualContentRef} onScroll={onHandleScroll} onClick={clickBtn}>
      {/* <div className="virtual-list-phantom" style={{ height: yuye.length * 30 + 'px' }}></div> */}
      <div>
        {yuye.map((item) => (
          <div key={item}>---{item}</div>
        ))}
      </div>
    </StyledDiv>
  );
});
Children.displayName = 'children';
export default Children;
