import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  name?: string;
  age?: number;
}

const DownLoad: React.FC<IProps> = (props) => {
  return <div>DownLoad: {props.age}</div>;
};

// const DownLoad: React.FunctionComponent<IProps> = (props) => {
//   return <div>DownLoad: {props.age}</div>;
// };

// const DownLoad = (props: IProps) => {
//   return <div>DownLoad: {props.age}</div>;
// };

export default memo(DownLoad);
