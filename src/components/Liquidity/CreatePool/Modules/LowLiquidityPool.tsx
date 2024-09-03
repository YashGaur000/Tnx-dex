import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { PoolSection } from '../Styles/PoolCard.style';
import Pool from './Pool';
import styled from 'styled-components';

const LiquidityPoolStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;
interface LowLiquidityPoolProps {
  isStablePresent: boolean;
  isVolatilePresent: boolean;
}
const LowLiquidityPool = ({
  isStablePresent,
  isVolatilePresent,
}: LowLiquidityPoolProps) => {
  return (
    <PoolSection>
      <LiquidityHeaderTitle fontSize={20}>
        Low Liquidity Pools
      </LiquidityHeaderTitle>
      <LiquidityPoolStyle>
        {!isStablePresent && <Pool poolType="stable" exists="false" />}
        {!isVolatilePresent && <Pool poolType="volatile" exists="false" />}
      </LiquidityPoolStyle>
    </PoolSection>
  );
};

export default LowLiquidityPool;
