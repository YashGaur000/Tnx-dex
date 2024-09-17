import { MainContainerStyle } from '../../common/MainContainerStyle';
import { CreateMainContainer } from '../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  AmountWithImg,
  ImageContainer,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import { InputBox } from '../../Swap/modules/InputBox';
import { PercentageSelectorContainer } from '../../Swap/styles/SwapForm.style.';
import {
  LockHeaderWrapper,
  LockleftSection,
  TipsContainer,
  UnderlineText,
} from '../Extendlock/styles/Extendlock.style';
import { DropDownContainer } from '../Mergelock/styles/MergeLock.style';
import TenexIcon from '../../../assets/tether.png';
import InformIcon from '../../../assets/information.svg';
import IncreaseStepper from './IncreaseStepper';
const IncreaseLock = () => {
  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={374}>
          <PercentageSelectorContainer>
            <LockHeaderTitle fontSize={24}>Increase Lock</LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              Current Lock 100 TENEX
            </LockDescriptonTitle>
          </PercentageSelectorContainer>

          <LockHeaderWrapper>
            <LockDescriptonTitle fontSize={14}>
              50.0 <LockHeaderTitle fontSize={14}>TENEX</LockHeaderTitle> locked
              for 11 hours
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              0.015 <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle>{' '}
              voting power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>

          <PercentageSelectorContainer>
            <LockHeaderTitle fontSize={16}>Add to lock</LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              Available{' '}
              <LockHeaderTitle fontSize={14}>106.48 TENEX</LockHeaderTitle>
            </LockDescriptonTitle>
          </PercentageSelectorContainer>

          <DropDownContainer>
            <InputBox type="number" border="none" />
            <AmountWithImg gap={8}>
              <ImageContainer src={TenexIcon} width="20px" height="20px" />
              <LockHeaderTitle fontSize={14}>TENEX</LockHeaderTitle>
            </AmountWithImg>
          </DropDownContainer>

          <TipsContainer>
            <ImageContainer width="24px" height="24px" src={InformIcon} />
            <LockHeaderTitle fontSize={14}>
              Depositing into the lock will increase your voting power. You can
              also{' '}
              <UnderlineText fontsize={14}>extend the lock time.</UnderlineText>
            </LockHeaderTitle>
          </TipsContainer>
        </LockleftSection>

        <IncreaseStepper />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default IncreaseLock;
