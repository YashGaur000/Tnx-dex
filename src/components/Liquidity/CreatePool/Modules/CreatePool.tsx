import { useState } from 'react';
import InformIcon from '../../../../assets/information.png';
import AvailablePool from './AvailablePool';
import LowLiquidityPool from './LowLiquidityPool';
import QuestionIcon from '../../../../assets/questionMark.png';
import SelectIcon from '../../../../assets/select.png';
import { TokenInfo } from './../../../../constants/tokens';
import TokenSelectModal from '../../../modal/TokenSelectModal';
import PopupScreen from '../../../ManageVeTenex/Modules/PopupScreen';
import LiquidityToolTips from '../../LiquidityHomePage/modules/LiquidityToolTips';
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

const CreatePool = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState<TokenInfo>();
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo>();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            />
          </TokenSelectItem>
        </CreatePoolStyles>

        {selectedToken1 && selectedToken2 ? (
          <>
            <AvailablePool />
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
