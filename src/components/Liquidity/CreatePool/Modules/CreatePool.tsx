import { useState } from 'react';
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
import { addLiquidity } from '../../../../services/Liquidity.service';
import { useAccount } from '../../../../hooks/useAccount';
import { useLiquidityStore } from '../../../../store/slices/liquiditySlice';

const CreatePool = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  // const [selectedToken1, setSelectedToken1] = useState<TokenInfo>();
  // const [selectedToken2, setSelectedToken2] = useState<TokenInfo>();
  const {
    selectedToken1,
    selectedToken2,
    setSelectedToken1,
    setSelectedToken2,
  } = useLiquidityStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();
  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: TokenInfo) => {
    if (tokenSelectTarget === 'token1') {
      setSelectedToken1(token);
    } else {
      setSelectedToken2(token);
    }
  };

  function handleTooolTipShow() {
    setPopUpVisible(true);
  }

  const closeModal = () => {
    setPopUpVisible(false);
  };

  // const {
  //   addLiquidityAction,
  // } = useLiquidityStore();

  const tokenA = '0x5B2f5c3e8A9Aa9B26A2ADE212Fa6d0B2f6e993DC';
  const tokenB = '0x66f473054828BF8D560869eF26Fb2f5Ff7D326E2';

  const { chainId, address: userAddress } = useAccount();

  if (userAddress) {
    console.log(
      addLiquidity({
        tokenA: tokenA,
        tokenB: tokenB,
        stable: false,
        amountADesired: 10,
        amountBDesired: 12,
        amountAMin: 5,
        amountBMin: 6,
        to: userAddress,
        deadline: 1723113333,
        chainId: chainId,
      })
    );
  }

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
