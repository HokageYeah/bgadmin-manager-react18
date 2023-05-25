import React, { memo } from 'react';

interface propsType {
  yuye: string;
}
const Children = memo((props: propsType) => {
  const { yuye } = props;
  return <div>children: {yuye}</div>;
});
Children.displayName = 'children';
export default Children;
