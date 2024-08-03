import { HeaderTitle } from '../Styles/ManageVetenex.style';
import SplitCard from './SplitCard';

import { GlobalButton } from '../../common';
import {
  SplitCardContainer,
  SplitContainer,
  SplitDatacontain,
} from '../Styles/SplitAndMergelockScreen.style';

const SplitScreen = () => {
  return (
    <SplitContainer>
      <SplitDatacontain>
        <HeaderTitle fontSize={23}>Split Your NFT</HeaderTitle>

        <SplitCardContainer>
          <SplitCard />
        </SplitCardContainer>
      </SplitDatacontain>
      <SplitDatacontain>
        <HeaderTitle fontSize={23}>New Split Your NFT</HeaderTitle>

        <SplitCardContainer>
          <SplitCard />
          <SplitCard />
          <SplitCard />
        </SplitCardContainer>
      </SplitDatacontain>

      <GlobalButton padding="10px 20px">Split</GlobalButton>
    </SplitContainer>
  );
};

export default SplitScreen;
