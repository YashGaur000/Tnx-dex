import InformationIcon from '../../../../assets/information.png';

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
  return (
    <CreateVoliteLiquiditySection>
      <VolatileLiquidityWrapper>
        <LiquidityImgStyle
          width={'20px'}
          height={'20px'}
          src={InformationIcon}
        />
        <StatsCardtitle fontSize={16}>
          {`You'r about to create a new volatile liquidity Pool...`}
        </StatsCardtitle>
      </VolatileLiquidityWrapper>
      <GlobalButton width="90px" height="40px">
        Change
      </GlobalButton>
    </CreateVoliteLiquiditySection>
  );
};

export default CreateNewLiquidity;
