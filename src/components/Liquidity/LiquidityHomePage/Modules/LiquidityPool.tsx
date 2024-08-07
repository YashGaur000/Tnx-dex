import LiquidityHeroSection from './LiquidityHeroSection';
import FilterContainer from './FilterContainer';
import LiquidityPoolTable from './LiquidityPoolTable';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';

const LiquidityPool = () => {
  return (
    <>
      <LiquidityHeaderTitle fontSize={36}>Liquidity</LiquidityHeaderTitle>
      <LiquidityHeroSection />
      <FilterContainer />
      <LiquidityPoolTable />
    </>
  );
};

export default LiquidityPool;
