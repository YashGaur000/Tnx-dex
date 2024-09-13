import { MainContainerStyle } from '../../common/MainContainerStyle';
import { CreateMainContainer } from '../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import { InputBox } from '../../Swap/modules/InputBox';
import {
  LockHeaderWrapper,
  LockleftSection,
  WalletAdressConainer,
} from '../Extendlock/styles/Extendlock.style';
import TransferLockSidebar from './TransferLockSidebar';

const Transferlock = () => {
  return (
    <MainContainerStyle>
      <CreateMainContainer>
        <LockleftSection height={278}>
          <LockHeaderWrapper>
            <LockHeaderTitle fontSize={16}>
              Transferring Lock #23123
            </LockHeaderTitle>
            <LockDescriptonTitle fontSize={14}>
              50.0 <LockHeaderTitle fontSize={14}>TENEX</LockHeaderTitle> locked
              for 11 hours
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={14}>
              0.015 <LockHeaderTitle fontSize={14}>veTENEX</LockHeaderTitle>{' '}
              voting power granted
            </LockDescriptonTitle>
          </LockHeaderWrapper>
          <WalletAdressConainer>
            <LockHeaderTitle fontSize={16}>To wallet address</LockHeaderTitle>
            <InputBox
              height="48px"
              border="1px solid #B8B8B899"
              borderradius={12}
              padding="12px  24px"
            />
          </WalletAdressConainer>
        </LockleftSection>

        <TransferLockSidebar />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default Transferlock;
