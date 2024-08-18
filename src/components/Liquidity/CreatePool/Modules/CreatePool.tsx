import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InformIcon from '../../../../assets/information.png';
// import AvailablePool from './AvailablePool';
import LowLiquidityPool from './LowLiquidityPool';
import QuestionIcon from '../../../../assets/questionMark.png';
import SelectIcon from '../../../../assets/select.png';
import { TokenInfo } from './../../../../constants/tokens';
import TokenSelectModal from '../../../modal/TokenSelectModal';
import PopupScreen from '../../../ManageVeTenex/Modules/PopupScreen';

import LiquidityToolTips from '../../LiquidityHomePage/Modules/LiquidityToolTips';
import {
  TokenSelectAlign,
  TokenSelectAlignSelect,
} from '../../../Swap/styles/SwapForm.style.';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { LiquidityHeaderTitle } from '../../LiquidityHomePage/styles/Liquiditypool.style';
import {
  InformImageStye,
  LiquidityTitle,
  StatsCardtitle,
} from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import { SuggestImg } from '../../LiquidityHomePage/styles/LiquidityTable.style';
import {
  CreatePoolStyles,
  TokenSelectAlignStyle,
  TokenSelectCustom,
  TokenSelectItem,
  CreateSuggestContain,
} from '../Styles/CreatePool.style';
import { useAccount } from '../../../../hooks/useAccount';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';

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
        <LiquidityHeaderTitle fontSize={36}>Create Pool</LiquidityHeaderTitle>
        <LiquidityTitle fontSize={16}>
          Create your new pool{' '}
          <span onMouseEnter={handleTooolTipShow}>
            <InformImageStye src={QuestionIcon} />
          </span>
        </LiquidityTitle>
        <CreatePoolStyles>
          <TokenSelectItem>
            <LiquidityHeaderTitle fontSize={20}>
              First Token
            </LiquidityHeaderTitle>

            <TokenSelectCustom onClick={() => handleTokenSelectOpen('token1')}>
              <TokenSelectAlignStyle>
                {selectedToken1 && (
                  <img
                    src={selectedToken1?.logoURI}
                    width={21}
                    height={22}
                    alt={selectedToken1.logoURI}
                  />
                )}
                <TokenSelectAlign>
                  {selectedToken1 ? selectedToken1.symbol : 'Select Token'}
                </TokenSelectAlign>
              </TokenSelectAlignStyle>

              <TokenSelectAlignSelect>
                <img src={SelectIcon} width={8} height={4} alt={SelectIcon} />
              </TokenSelectAlignSelect>
            </TokenSelectCustom>

            <TokenSelectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
            />
          </TokenSelectItem>
          <TokenSelectItem>
            <LiquidityHeaderTitle fontSize={20}>
              Second Token
            </LiquidityHeaderTitle>

            <TokenSelectCustom onClick={() => handleTokenSelectOpen('token2')}>
              <TokenSelectAlignStyle>
                {selectedToken2 && (
                  <img
                    src={selectedToken2?.logoURI}
                    width={21}
                    height={22}
                    alt={selectedToken2.logoURI}
                  />
                )}
                <TokenSelectAlign>
                  {selectedToken2 ? selectedToken2.symbol : 'Select Token'}
                </TokenSelectAlign>
              </TokenSelectAlignStyle>

              <TokenSelectAlignSelect>
                <img src={SelectIcon} width={8} height={4} alt={SelectIcon} />
              </TokenSelectAlignSelect>
            </TokenSelectCustom>

            <TokenSelectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
            />
          </TokenSelectItem>
        </CreatePoolStyles>

        {selectedToken1 && selectedToken2 ? (
          <>
            {/* todo: add contract call to check if pool is available for selected token 
            <AvailablePool /> */}
            <LowLiquidityPool />
          </>
        ) : (
          <CreateSuggestContain>
            <SuggestImg src={InformIcon} alt="Information Icon" />
            <StatsCardtitle fontSize={16}>
              Start by selecting the tokens. The liquidity pools available for
              deposit will show up next.
            </StatsCardtitle>
          </CreateSuggestContain>
        )}
      </MainContainerStyle>

      <PopupScreen isVisible={isPopUpVisible} onClose={closeModal}>
        {<LiquidityToolTips />}
      </PopupScreen>
    </>
  );
};

export default CreatePool;
