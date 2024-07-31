import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';
import Main from '../../components/ManageVeTenex/Modules/Main';

const ManageVeTenexContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  color: ${({ theme }) => theme.colors.text};
  height: 100vh;
  @media (max-width: 900px) {
    display: inline;
    text-align: -webkit-center;
  }
`;
const ManageveTenex: React.FC = () => {
  return (
    <ManageVeTenexContainer>
      <Main />
    </ManageVeTenexContainer>
  );
};

export default ManageveTenex;
