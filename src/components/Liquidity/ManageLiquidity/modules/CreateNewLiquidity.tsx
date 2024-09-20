import InformationIcon from '../../../../assets/information.png';
import useQueryParams from '../../../../hooks/useQueryParams';
import { GlobalButton } from '../../../common';
import { useNavigate, useLocation } from 'react-router-dom';
import { LiquidityImgStyle } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import {
  CreateVoliteLiquiditySection,
  VolatileLiquidityWrapper,
} from '../styles/TokenDeposite.style';
import { useState } from 'react';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';

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

    const token1 = searchParams.get('token1');
    const token2 = searchParams.get('token2');

    // Update the query parameter in the URL
    navigate(`/liquidity/create?token1=${token1}&token2=${token2}`, {
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
        <LiquidityHeaderTitle fontsize={14}>
          You&apos;r about to create a new{' '}
          {poolType == '0' ? 'stable' : 'volatile'} liquidity Pool...
        </LiquidityHeaderTitle>
      </VolatileLiquidityWrapper>
      <GlobalButton
        width="90px"
        height="29px"
        onClick={() => handleTypeChange()}
      >
        Change
      </GlobalButton>
    </CreateVoliteLiquiditySection>
  );
};

export default CreateNewLiquidity;
