import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { PoolSection } from '../Styles/PoolCard.style';
import Pool from './Pool';
import styled from 'styled-components';

const LiquidityPoolStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const LowLiquidityPool = () => {
  return (
    <PoolSection>
      <LiquidityHeaderTitle fontSize={20}>
        Low Liquidity Pools
      </LiquidityHeaderTitle>
      <LiquidityPoolStyle>
        <Pool poolType="stable" exists="false" />
        <Pool poolType="volatile" exists="false" />
      </LiquidityPoolStyle>
    </PoolSection>
  );
};

export default LowLiquidityPool;
