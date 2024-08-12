import Pool from './Pool';

import { PoolSection } from '../Styles/PoolCard.style';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';

const AvailablePool = () => {
  return (
    <PoolSection>
      <LiquidityHeaderTitle fontSize={20}>Available Pools</LiquidityHeaderTitle>
      <div>
        <Pool poolType="stable" />
      </div>
    </PoolSection>
  );
};

export default AvailablePool;
