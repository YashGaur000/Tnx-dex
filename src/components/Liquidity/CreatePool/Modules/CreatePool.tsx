import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InformIcon from '../../../../assets/information.svg';
// import AvailablePool from './AvailablePool';
import LowLiquidityPool from './LowLiquidityPool';
import QuestionIcon from '../../../../assets/questionmark.svg';
import SelectIcon from '../../../../assets/select.svg';
import { TokenInfo } from '../../../../constants/tokens/type';
import TokenSelectModal from '../../../modal/TokenSelectModal';
import PopupScreen from '../../../common/PopupScreen';

import LiquidityToolTips from '../../LiquidityHomePage/Modules/LiquidityToolTips';
import {
  TokenSelectAlign,
  TokenSelectAlignSelect,
} from '../../../Swap/styles/SwapForm.style.';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import { PopupWrapper } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';

import {
  CreatePoolStyles,
  TokenSelectAlignStyle,
  TokenSelectCustom,
  TokenSelectItem,
  CreateSuggestContain,
  ToolTipWraper,
  CreateLiqidityHeaderWrapper,
  SelectedTokenImgContainer,
} from '../Styles/CreatePool.style';
import { useAccount } from '../../../../hooks/useAccount';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import AvailablePool from './AvailablePool';
import { useLiquidityPoolData } from '../../../../hooks/useLiquidityPoolData';
import { useTokenPrice } from '../../../../hooks/useTokenPrice';

const CreatePool = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();
  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');
  const navigate = useNavigate();
  const location = useLocation();

  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  // const poolType = getParam('type') ? 'stable' : 'volatile';

  const { loading, error, data: poolData } = useLiquidityPoolData();

  const { data: tokenPriceData } = useTokenPrice();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // @todo : check if this query is possible to integrate in gql itself
  const availablePools = poolData.filter((item) => {
    if (selectedToken1?.symbol != 'ETH' && selectedToken2?.symbol != 'ETH') {
      if (
        (item.token0.symbol === selectedToken1?.symbol &&
          item.token1.symbol === selectedToken2?.symbol) ||
        (item.token1.symbol === selectedToken1?.symbol &&
          item.token0.symbol === selectedToken2?.symbol)
      ) {
        return item;
      }
    } else if (selectedToken1?.symbol == 'ETH') {
      if (
        (item.token0.symbol === 'WETH' &&
          item.token1.symbol === selectedToken2?.symbol) ||
        (item.token1.symbol === 'WETH' &&
          item.token0.symbol === selectedToken2?.symbol)
      ) {
        return item;
      }
    } else if (selectedToken2?.symbol == 'ETH') {
      if (
        (item.token0.symbol === selectedToken1?.symbol &&
          item.token1.symbol === 'WETH') ||
        (item.token1.symbol === selectedToken1?.symbol &&
          item.token0.symbol === 'WETH')
      ) {
        return item;
      }
    }
  });

  // Check if there's one item with isStable true and another with isStable false
  const stablePool = availablePools.find((item) => item.isStable === true)
    ? true
    : false;
  const nonStablePool = availablePools.find((item) => item.isStable === false)
    ? true
    : false;

  const hasBothStableAndNonStable = !!stablePool && !!nonStablePool;

  // console.log(availablePools, hasBothStableAndNonStable)

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: TokenInfo) => {
    const queryParams = new URLSearchParams(location.search);
    if (tokenSelectTarget === 'token1') {
      queryParams.set('token1', token.address);
    } else {
      queryParams.set('token2', token.address);
    }
    navigate({
      pathname: location.pathname,
      search: `?${queryParams.toString()}`,
    });
  };

  function handleTooolTipShow() {
    setPopUpVisible(true);
  }

  const closeModal = () => {
    setPopUpVisible(false);
  };

  return (
    <>
      <MainContainerStyle>
        <CreateLiqidityHeaderWrapper>
          <LiquidityHeaderTitle fontSize={36}>
            Create your Liquidity Pool
          </LiquidityHeaderTitle>

          <ToolTipWraper onClick={handleTooolTipShow}>
            <ImageContainer
              width="24px"
              height="24px"
              src={QuestionIcon}
              cursor="pointer"
            />
          </ToolTipWraper>
        </CreateLiqidityHeaderWrapper>
        <CreatePoolStyles>
          <TokenSelectItem>
            <LiquidityHeaderTitle fontSize={20}>
              First Token
            </LiquidityHeaderTitle>

            <TokenSelectCustom onClick={() => handleTokenSelectOpen('token1')}>
              <TokenSelectAlignStyle>
                {selectedToken1 && (
                  <SelectedTokenImgContainer
                    src={selectedToken1?.logoURI}
                    alt={selectedToken1.logoURI}
                  />
                )}
                <TokenSelectAlign>
                  {selectedToken1 ? selectedToken1.symbol : 'Select Token'}
                </TokenSelectAlign>
              </TokenSelectAlignStyle>

              <TokenSelectAlignSelect>
                <ImageContainer
                  src={SelectIcon}
                  alt={SelectIcon}
                  width="9"
                  height="4"
                />
              </TokenSelectAlignSelect>
            </TokenSelectCustom>

            <TokenSelectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
              tokenPriceData={tokenPriceData}
            />
          </TokenSelectItem>
          <TokenSelectItem>
            <LiquidityHeaderTitle fontSize={20}>
              Second Token
            </LiquidityHeaderTitle>

            <TokenSelectCustom onClick={() => handleTokenSelectOpen('token2')}>
              <TokenSelectAlignStyle>
                {selectedToken2 && (
                  <SelectedTokenImgContainer
                    src={selectedToken2?.logoURI}
                    alt={selectedToken2.logoURI}
                  />
                )}
                <TokenSelectAlign>
                  {selectedToken2 ? selectedToken2.symbol : 'Select Token'}
                </TokenSelectAlign>
              </TokenSelectAlignStyle>

              <TokenSelectAlignSelect>
                <ImageContainer
                  src={SelectIcon}
                  width="8"
                  height="8"
                  alt={SelectIcon}
                />
              </TokenSelectAlignSelect>
            </TokenSelectCustom>

            <TokenSelectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
              tokenPriceData={tokenPriceData}
            />
          </TokenSelectItem>
        </CreatePoolStyles>

        {selectedToken1 && selectedToken2 ? (
          <>
            {/* todo: add contract call to check if pool is available for selected token */}
            {(!stablePool && !nonStablePool) || (
              <AvailablePool poolData={availablePools} />
            )}
            {!hasBothStableAndNonStable && (
              <LowLiquidityPool
                isStablePresent={stablePool}
                isVolatilePresent={nonStablePool}
              />
            )}
          </>
        ) : (
          <CreateSuggestContain>
            <ImageContainer
              src={InformIcon}
              alt="Information Icon"
              width="20"
              height="21"
            />
            <LiquidityHeaderTitle fontSize={16}>
              Start by selecting the tokens. The liquidity pools available for
              deposit will show up next
            </LiquidityHeaderTitle>
          </CreateSuggestContain>
        )}
      </MainContainerStyle>

      <PopupScreen
        isvisible={isPopUpVisible}
        onClose={closeModal}
        width="500px"
        height="518px"
      >
        <PopupWrapper>{<LiquidityToolTips />}</PopupWrapper>
      </PopupScreen>
    </>
  );
};

export default CreatePool;
