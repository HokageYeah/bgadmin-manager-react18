/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// 渲染十万条数据解决方案
// https://juejin.cn/post/7065218958663614500
// 字节跳动面试官：请100行代码实现无限滚动:
// https://mp.weixin.qq.com/s?__biz=MzkwODIwMDY2OQ==&mid=2247489760&idx=1&sn=6ed96382ec124884be06227f68882068&scene=21#wechat_redirect
const StyleUl = styled.ul`
  height: 800px;
  width: 30%;
  border: 1px solid red;
  margin: 20px auto;
  position: relative;
  overflow: scroll;
  .li-card {
    display: flex;
    justify-content: center;
    list-style: none;
    box-shadow: 2px 2px 9px 0px #bbb;
    padding: 70px 0;
    margin-bottom: 20px;
    border-radius: 10px;
    position: absolute;
    top: 30px;
    left: 10%;
    width: 80%;
  }
`;
interface propsType {
  yuye: number[];
  height: number;
}
const THRESHOLD = 15;
const ChildrenIntersectionObserver = memo((props: propsType) => {
  const { yuye, height } = props; // 数据，节点高度
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(THRESHOLD);
  const [observer, setObserver] = useState<IntersectionObserver>();
  const $bottomElement = useRef(null);
  const $topElement = useRef(null);
  const updatedList = yuye.slice(start, end);
  const lastIndex = updatedList.length - 1;

  useEffect(() => {
    // 定义观察
    intiateScrollObserver();
    return () => {
      // 放弃观察
      resetObservation();
    };
  }, [end]);
  // 定义观察
  const intiateScrollObserver = () => {
    /**
     * 调用IntersectionObserver时，除了传一个回调函数，还可以传入一个option对象，配置如下属性：
       threshold: 决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例（intersectionRatio）达到0时触发回调函数。用户可以自定义这个数组。比如，[0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。
       root: 用于观察的根元素，默认是浏览器的视口，也可以指定具体元素，指定元素的时候用于观察的元素必须是指定元素的子元素
       rootMargin: 用来扩大或者缩小视窗的的大小，使用css的定义方法，10px 10px 30px 20px表示top、right、bottom 和 left的值
     */
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const Observer = new IntersectionObserver(callback, options);
    // 分别观察开头和结尾的元素
    if ($topElement.current) {
      Observer.observe($topElement.current);
    }
    if ($bottomElement.current) {
      Observer.observe($bottomElement.current);
    }
    // 设初始值
    setObserver(Observer);
  };
  const callback = (entries: any[], observer: unknown) => {
    console.log(entries, observer);
    entries.forEach((entry) => {
      /**
       * target: 被观察的目标元素，是一个 DOM 节点对象
         isIntersecting: 是否进入可视区域
         intersectionRatio: 相交区域和目标元素的比例值，进入可视区域，值大于0，否则等于0
       */
      const listLength = props.yuye.length;
      // Scroll Down
      if (entry.isIntersecting && entry.target.id === 'bottom') {
        const maxStartIndex = listLength - 1 - THRESHOLD; // Maximum index value `start` can take
        const maxEndIndex = listLength - 1; // Maximum index value `end` can take
        const newEnd = end + 10 <= maxEndIndex ? end + 10 : maxEndIndex;
        const newStart = end - 5 <= maxStartIndex ? end - 5 : maxStartIndex;
        setStart(newStart);
        setEnd(newEnd);
      }
      // Scroll up
      if (entry.isIntersecting && entry.target.id === 'top') {
        const newEnd = end === THRESHOLD ? THRESHOLD : end - 10 > THRESHOLD ? end - 10 : THRESHOLD;
        const newStart = start === 0 ? 0 : start - 10 > 0 ? start - 10 : 0;
        setStart(newStart);
        setEnd(newEnd);
      }
    });
  };
  //   停止滚动时放弃观察
  const resetObservation = () => {
    observer && observer.unobserve($bottomElement.current as unknown as Element);
    observer && observer.unobserve($topElement.current as unknown as Element);
  };
  // 渲染时，头尾ref处理
  const getReference = (index: number, isLastIndex: boolean) => {
    if (index === 0) return $topElement;
    if (isLastIndex) return $bottomElement;
    return null;
  };

  return (
    <StyleUl>
      {updatedList.map((item, index) => {
        const top = height * (index + start) + 'px';
        const refVal = getReference(index, index === lastIndex);
        const id = index === 0 ? 'top' : index === lastIndex ? 'bottom' : '';
        return (
          <li className="li-card" key={item} style={{ top }} ref={refVal} id={id}>
            {item}
          </li>
        );
      })}
    </StyleUl>
  );
});
ChildrenIntersectionObserver.displayName = 'ChildrenIntersectionObserver';
export default ChildrenIntersectionObserver;
