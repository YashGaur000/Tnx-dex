import { GlobalButton } from '../../common';
import { StyledDepositContainer } from '../../Liquidity/ManageLiquidity/styles/LiquidityDeposit.style';
import { LockDescriptonTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  SteperWrapper,
  TransferLockTitle,
  UnderlineText,
} from '../Extendlock/styles/Extendlock.style';

const TransferLockSidebar = () => {
  return (
    <StyledDepositContainer>
      <TransferLockTitle fontsize={24}>Transfer Lock</TransferLockTitle>
      <SteperWrapper>
        <LockDescriptonTitle fontSize={14}>
          Transfering a lock will also transfer any rewards and rebases! Before
          continuing, please make sure you have
          <UnderlineText fontsize={14}>
            claimes all available rewards
          </UnderlineText>
        </LockDescriptonTitle>
        <GlobalButton>Continue</GlobalButton>
      </SteperWrapper>
    </StyledDepositContainer>
  );
};

export default TransferLockSidebar;
