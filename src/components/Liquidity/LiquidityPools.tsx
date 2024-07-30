import React from 'react';
import styled from 'styled-components';
import { GradientSpan } from '../Homepage/HeroSection';
import Teth from '../../assets/Tether.svg';
import BTC from '../../assets/Btc.svg';
import { DefaultTheme } from '../../styles/Theme';

const LiquidityPoolListContainer = styled.div<{ theme: DefaultTheme }>`
  display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(5, 1fr);
  width: 94%;
  height: 67%;
  border-radius: 16px;
  padding: 50px 60px 70px 50px;
  text-align: left;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  
  
 

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
`;

const StyledDepositButton = styled.button<{
  isconnected?: string;
  theme: DefaultTheme;
}>`
  padding: 1px 18px 1px 18px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;

const PoolListHeader = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  float: left;
  direction: row;
  padding: 2px;
  margin-bottom: 25px;
`;

const PoolListHeaders = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  display: flex;
  float: right;
  direction: row;
  justify-content: right;
  padding: 2px;
`;

const PoolListPairElementContainer = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-content: left;
  height: 10px;
`;

const PoolListElementContainer = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-content: right;
  margin-top: -8px;
`;

const PoolListVolumeDescription = styled.div<{
  Margintop?: number;
  theme: DefaultTheme;
}>`
  margin-top: ${({ Margintop }) => Margintop}px;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.grey};
  justify-content: right;
  margin-left: 20px;
  margin-top: -20px;
`;

const PoolListVolumeSubDescription = styled.div<{ theme: DefaultTheme }>`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.grey};
  justify-content: right;
  margin-left: 20px;
`;

const PoolPairIcons = styled.img`
  width: 30px;
  height: 30px;
  &:first-child {
    margin-right: -6px;
  }
`;

const PoolPairIconcontainer = styled.div<{ theme: DefaultTheme }>`
  display; flex;
  justify-content: center;
  float: left;
`;

const PairNameContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-top: -43px;
`;

const PairName = styled.div<{ theme: DefaultTheme }>``;

const StablePercentage = styled.div<{ fontSize?: number; theme: DefaultTheme }>`
  font-size: ${({ fontSize }) => fontSize};
`;

const TVLvalue = styled.div<{ theme: DefaultTheme }>``;

// const StablePercentageValue = styled.div<{ fontSize?: number; theme: DefaultTheme}>`
// font-size: ${({fontSize}) => fontSize};

// `;

const SmallWrapper = styled.div<{
  Marginleft?: number;
  fontSize?: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  margin-left: ${({ Marginleft }) => Marginleft}px;
  margin-top: -18px;
`;

// const SortingIcon = styled.img<{ theme: DefaultTheme}>`
//   height: 10px;
//   width: 20px;
// `;

const LiquidityPools: React.FC = () => {
  return (
    <LiquidityPoolListContainer>
      <PoolListHeader>
        <GradientSpan>
          <h3>Liquidity Pools</h3>
        </GradientSpan>
      </PoolListHeader>
      <PoolListHeaders>
        <GradientSpan>
          <h3>APR</h3>
        </GradientSpan>
      </PoolListHeaders>
      {/* <SortingIcon src={sort} alt="sort logo" /> */}
      {/* <PoolPairIcons src={sort} alt="sort logo" />
                    </SortingIcon> */}
      <PoolListHeaders>
        <GradientSpan>
          <h3>Volume</h3>
        </GradientSpan>
      </PoolListHeaders>
      <PoolListHeaders>
        <GradientSpan>
          <h3>Fees</h3>
        </GradientSpan>
      </PoolListHeaders>
      <PoolListHeaders>
        <GradientSpan>
          <h3>Pool Balance</h3>
        </GradientSpan>
      </PoolListHeaders>
      <PoolListPairElementContainer>
        <PoolPairIconcontainer>
          <PoolPairIcons src={Teth} alt="Teth Logo" />
          <PoolPairIcons src={BTC} alt="BTC Logo" />
          <PairNameContainer>
            <PairName>USDT-BTC</PairName>
            <StablePercentage fontSize={12}>
              <GradientSpan fontSize={12}>Stable</GradientSpan>
              <SmallWrapper fontSize={12} Marginleft={50}>
                0.01%
              </SmallWrapper>
              {/* <StablePercentageValue fontSize={12}>0.01%</StablePercentageValue> */}
            </StablePercentage>
            <TVLvalue>
              <GradientSpan fontSize={12}>TVL </GradientSpan>
              <SmallWrapper fontSize={12} Marginleft={30}>
                ~$7,428,176,4
              </SmallWrapper>
            </TVLvalue>
          </PairNameContainer>
        </PoolPairIconcontainer>
      </PoolListPairElementContainer>
      <PoolListElementContainer>226.18%</PoolListElementContainer>
      <PoolListElementContainer>
        ~$101,804,848
        <PoolListVolumeDescription>
          0.5643 USDT
          <PoolListVolumeSubDescription>0.003 BTC</PoolListVolumeSubDescription>
        </PoolListVolumeDescription>
      </PoolListElementContainer>
      <PoolListElementContainer>
        ~$10,180
        <PoolListVolumeDescription>
          0.5643 USDT
          <PoolListVolumeSubDescription>0.003 BTC</PoolListVolumeSubDescription>
        </PoolListVolumeDescription>
      </PoolListElementContainer>
      <PoolListElementContainer>
        2,428.64 USDT
        {/* <PoolListVolumeDescription Margintop={-150}> */}
        <PoolListVolumeDescription>
          0.5643 USDT
          <br />
          <StyledDepositButton>Deposit</StyledDepositButton>
        </PoolListVolumeDescription>
      </PoolListElementContainer>
      <PoolListPairElementContainer>
        <PoolPairIconcontainer>
          <PoolPairIcons src={Teth} alt="Teth Logo" />
          <PoolPairIcons src={BTC} alt="BTC Logo" />
          <PairNameContainer>
            <PairName>USDT-BTC</PairName>
            <StablePercentage fontSize={12}>
              <GradientSpan fontSize={12}>Stable</GradientSpan>
              <SmallWrapper fontSize={12} Marginleft={50}>
                0.01%
              </SmallWrapper>
              {/* <StablePercentageValue fontSize={12}>0.01%</StablePercentageValue> */}
            </StablePercentage>
            <TVLvalue>
              <GradientSpan fontSize={12}>TVL </GradientSpan>
              <SmallWrapper fontSize={12} Marginleft={30}>
                ~$7,428,176,4
              </SmallWrapper>
            </TVLvalue>
          </PairNameContainer>
        </PoolPairIconcontainer>
      </PoolListPairElementContainer>
      <PoolListElementContainer>226.18%</PoolListElementContainer>
      <PoolListElementContainer>
        ~$101,804,848
        <PoolListVolumeDescription>
          0.5643 USDT
          <PoolListVolumeSubDescription>0.003 BTC</PoolListVolumeSubDescription>
        </PoolListVolumeDescription>
      </PoolListElementContainer>
      <PoolListElementContainer>
        ~$10,180
        <PoolListVolumeDescription>
          0.5643 USDT
          <PoolListVolumeSubDescription>0.003 BTC</PoolListVolumeSubDescription>
        </PoolListVolumeDescription>
      </PoolListElementContainer>
      <PoolListElementContainer>
        2,428.64 USDT
        <PoolListVolumeDescription Margintop={-15}>
          0.5643 USDT
          <br />
          <StyledDepositButton>Deposit</StyledDepositButton>
        </PoolListVolumeDescription>
      </PoolListElementContainer>
    </LiquidityPoolListContainer>
  );
};

export default LiquidityPools;
