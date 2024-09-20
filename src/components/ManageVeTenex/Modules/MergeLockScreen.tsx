import { LockHeaderTitle } from '../Styles/ManageVetenex.style';
import {
  SplitCardContainer,
  SplitContainer,
  SplitDatacontain,
} from '../Styles/SplitAndMergelockScreen.style';
import MergeCard from './MergeCard';
import { GlobalButton } from '../../common';
const MergeLockScreen = () => {
  return (
    <>
      <SplitContainer>
        <SplitDatacontain>
          <LockHeaderTitle fontsize={23}>Select NFTs to merge</LockHeaderTitle>

          <SplitCardContainer>
            <MergeCard />
            <MergeCard />
            <MergeCard />
            <MergeCard />
          </SplitCardContainer>
          <GlobalButton padding="10px 20px">Merge</GlobalButton>
        </SplitDatacontain>
      </SplitContainer>
    </>
  );
};

export default MergeLockScreen;
