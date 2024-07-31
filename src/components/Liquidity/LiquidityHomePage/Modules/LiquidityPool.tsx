import styled from 'styled-components';
import LiquidityHeroSection from './LiquidityHeroSection';
import FilterContainer from './FilterContainer';

const H1 = styled.h4`
  font-size: 2.4em;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;
`;

const Section = styled.section`
  width: 100%;
`;

const LiquidityPool = () => {
  return (
    <Section>
      <H1>Liquidity</H1>
      <LiquidityHeroSection />
      <FilterContainer />
    </Section>
  );
};

export default LiquidityPool;
