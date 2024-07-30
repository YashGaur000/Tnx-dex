import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import { styled } from 'styled-components';

const PoolTableContainer = styled.div<{ theme: DefaultTheme }>``;

const PoolTable: React.FC = () => {
  return <PoolTableContainer></PoolTableContainer>;
};

export default PoolTable;
