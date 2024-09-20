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
      <LockDescriptonTitle fontsize={14}>
        <LockHeaderTitle fontsize={14}>Important! </LockHeaderTitle>Merging will
        reset any rewards and rebases!
      </LockDescriptonTitle>
      <LockDescriptonTitle fontsize={14}>
        Before continuing, please make sure you have reviewed and{' '}
        <UnderlineText fontsize={14}>
          claimed all available rewards.
        </UnderlineText>
      </LockDescriptonTitle>
    </SteperWrapper>
  );
};

export default MergeLockSidebar;
