import InformationIcon from '../../../../assets/information.png';
import useQueryParams from '../../../../hooks/useQueryParams';
import { GlobalButton } from '../../../common';
import {
  LiquidityImgStyle,
  StatsCardtitle,
} from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  CreateVoliteLiquiditySection,
  VolatileLiquidityWrapper,
} from '../styles/TokenDeposite.style';

const CreateNewLiquidity = () => {
  const getParam = useQueryParams();

  const poolType = getParam('type');
  return (
    <CreateVoliteLiquiditySection>
      <VolatileLiquidityWrapper>
        <LiquidityImgStyle
          width={'20px'}
          height={'20px'}
          src={InformationIcon}
        />
        <StatsCardtitle fontSize={16}>
          You&apos;r about to create a new {poolType ? 'stable' : 'volatile'}{' '}
          liquidity Pool...
        </StatsCardtitle>
      </VolatileLiquidityWrapper>
      <GlobalButton width="90px" height="40px">
        Change
      </GlobalButton>
    </CreateVoliteLiquiditySection>
  );
};

export default CreateNewLiquidity;
