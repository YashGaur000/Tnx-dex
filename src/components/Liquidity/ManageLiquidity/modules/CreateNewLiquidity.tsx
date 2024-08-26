import InformationIcon from '../../../../assets/information.png';
import useQueryParams from '../../../../hooks/useQueryParams';
import { GlobalButton } from '../../../common';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LiquidityImgStyle,
  StatsCardtitle,
} from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  CreateVoliteLiquiditySection,
  VolatileLiquidityWrapper,
} from '../styles/TokenDeposite.style';
import { useState } from 'react';

const CreateNewLiquidity = () => {
  const getParam = useQueryParams();
  const navigate = useNavigate();
  const location = useLocation();
  // Get the initial pool type from the query parameter
  const initialPoolType = getParam('type') ?? '0';

  // Manage pool type state
  const [poolType, setPoolType] = useState<string>(initialPoolType);

  // Handle type change
  const handleTypeChange = (): void => {
    const newType = poolType === '0' ? '1' : '0';
    setPoolType(newType);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('type', newType);

    // Update the query parameter in the URL
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  return (
    <CreateVoliteLiquiditySection>
      <VolatileLiquidityWrapper>
        <LiquidityImgStyle
          width={'24px'}
          height={'24px'}
          src={InformationIcon}
        />
        <StatsCardtitle fontSize={16}>
          You&apos;r about to create a new{' '}
          {poolType == '0' ? 'stable' : 'volatile'} liquidity Pool...
        </StatsCardtitle>
      </VolatileLiquidityWrapper>
      <GlobalButton
        width="90px"
        height="40px"
        onClick={() => handleTypeChange()}
      >
        Change
      </GlobalButton>
    </CreateVoliteLiquiditySection>
  );
};

export default CreateNewLiquidity;
