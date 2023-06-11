import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .content {
    height: 100px;
    /* 全局主题 + 混入 */
    ${(props) => props.theme.mixin.wrapv1}
  }
`;
