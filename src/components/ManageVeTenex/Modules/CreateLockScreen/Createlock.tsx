import UsdtIcon from '../../../../assets/usdt.png';
import InformIcon from '../../../../assets/information.png';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
  LockCardstyle,
} from '../../Styles/ManageVetenex.style';
import {
  Slider,
  SliderContainer,
} from '../../../Swap/styles/TransactionDeadline.style';
import {
  LockTitle,
  CreateLockFirstSection,
  LockLoaderContainer,
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
  LockScreenInstruction,
  InformImg,
  LockProgressStyle,
  LockInputBox,
} from '../../Styles/CreateLock.style';
import LockDeposite from './LockDeposite';
import { StatsCardtitle } from '../../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { CreateMainContainer } from '../../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  FormFieldContainer,
  FormRowWrapper,
  ImageWithTitleWrap,
  TokenImgLiquidity,
} from '../../../Liquidity/ManageLiquidity/styles/LiquidityForm.style';

const Createlock = () => {
  return (
    <MainContainerStyle>
      <header>
        <LockHeaderTitle fontSize={36}>Lock</LockHeaderTitle>
        <LockDescriptonTitle fontSize={16}>
          Lock your tokens for veTENEX voting power
        </LockDescriptonTitle>
      </header>

      <CreateMainContainer>
        <CreateLockFirstSection>
          <LockCardstyle>
            <FormFieldContainer>
              <FormRowWrapper>
                <ImageWithTitleWrap>
                  <TokenImgLiquidity src={UsdtIcon} alt="USDT logo" />
                  <label>USDT</label>
                </ImageWithTitleWrap>
                <label>Available 0000</label>
              </FormRowWrapper>
              <div>
                <LockInputBox type="text" name="usdt" />
              </div>
              <LockProgressStyle>
                <label>0%</label>
                <label>25%</label>
                <label>50%</label>
                <label>75%</label>
                <label>MAX</label>
              </LockProgressStyle>
            </FormFieldContainer>

            <LockTitle fontSize={17}>
              Locking your TENEX tokens for veTENEX voting power
            </LockTitle>
            <LockLoaderContainer>
              <LoaderStatus fontSize={14}>7days</LoaderStatus>
              <LoaderStyle>
                <SliderContainer>
                  <Slider type="range" min="0" max="60" />
                </SliderContainer>
              </LoaderStyle>
              <SliderDeadlineStyle fontSize={10}>
                <label>7days</label>
                <label>6 month</label>
                <label>1 years</label>
                <label>2 years</label>
                <label>3 years</label>
                <label>3 years</label>
              </SliderDeadlineStyle>
            </LockLoaderContainer>
          </LockCardstyle>

          <LockCardstyle>
            <LockScreenInstruction>
              <InformImg src={InformIcon} />
              <StatsCardtitle fontSize={14}>
                Locking will give you an NFT, referred to as a veNFT. You can
                increase the Lock amount or extend the Lock time at any point
                after.
              </StatsCardtitle>
            </LockScreenInstruction>
          </LockCardstyle>
        </CreateLockFirstSection>
        <LockDeposite />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default Createlock;
