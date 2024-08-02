import styled from 'styled-components';
import { HeaderTitle } from '../Styles/ManageVetenex.style';
import SplitCard from './SplitCard';
import { DefaultTheme } from '../../../styles/Theme';
import { GlobalButton } from '../../common';

const SplitContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
`;
const SplitDatacontain = styled.div<{ theme: DefaultTheme }>`
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
const SplitCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  gap: 10px;
`;
const SplitScreen = () => {
  return (
    <SplitContainer>
      <SplitDatacontain>
        <HeaderTitle fontSize={23}>Split Your NFT</HeaderTitle>

        <SplitCardContainer>
          <SplitCard />
        </SplitCardContainer>
      </SplitDatacontain>
      <SplitDatacontain>
        <HeaderTitle fontSize={23}>New Split Your NFT</HeaderTitle>

        <SplitCardContainer>
          <SplitCard />
          <SplitCard />
          <SplitCard />
        </SplitCardContainer>
      </SplitDatacontain>

      <GlobalButton padding="10px 20px">Split</GlobalButton>
    </SplitContainer>
  );
};

export default SplitScreen;
