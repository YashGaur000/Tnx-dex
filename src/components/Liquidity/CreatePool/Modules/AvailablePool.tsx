import Pool from './Pool';

import { PoolSection } from '../Styles/PoolCard.style';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { LiquidityPoolNewType } from '../../../../graphql/types/LiquidityPoolNew';

interface AvailablePoolProps {
  poolData: LiquidityPoolNewType[];
}
const AvailablePool = ({ poolData }: AvailablePoolProps) => {
  // console.log("pool data in available component",poolData.filter((item)=>{
  //   if(item.isStable == true){
  //     return item;
  //   }
  // }))
  return (
    <PoolSection>
      <LiquidityHeaderTitle fontSize={20}>Available Pools</LiquidityHeaderTitle>
      <div>
        {poolData.map((pool) => (
          <Pool
            key={pool.id}
            poolDetails={pool}
            poolType="stable"
            exists="true"
          />
        ))}
      </div>
    </PoolSection>
  );
};

export default AvailablePool;
