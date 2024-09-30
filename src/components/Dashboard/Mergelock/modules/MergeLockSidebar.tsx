import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  SteperWrapper,
  UnderlineText,
} from '../../Extendlock/styles/Extendlock.style';

const MergeLockSidebar = () => {
  return (
    <SteperWrapper>
      <LockDescriptonTitle fontSize={14}>
        <LockHeaderTitle fontSize={14}>Important! </LockHeaderTitle>Merging will
        reset any rewards and rebases!
      </LockDescriptonTitle>
      <LockDescriptonTitle fontSize={14}>
        Before continuing, please make sure you have reviewed and{' '}
        <UnderlineText fontSize={14}>
          claimed all available rewards.
        </UnderlineText>
      </LockDescriptonTitle>
    </SteperWrapper>
  );
};

export default MergeLockSidebar;
