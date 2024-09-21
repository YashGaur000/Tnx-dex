import {
  ToolTipSection,
  ToolTipsMainContainer,
  UnorderListStyle,
  ToolTipsconentCard,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityToolTipStyle';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../Styles/ManageVetenex.style';

const RelayToolTips = () => {
  return (
    <ToolTipSection fontsize={12}>
      <LockHeaderTitle fontsize={24}>Relay</LockHeaderTitle>
      <ToolTipsMainContainer>
        <LockDescriptonTitle fontsize={12}>
          Relay was designed to automate the process of managing veNFTs :
          <UnorderListStyle>
            <li>
              users deposit their veNFTs into the available Relay strategy
            </li>
            <li>
              all the voting and claiming is optimally done by the strategy
              automation
            </li>
            <li>
              rewards are converted into the strategy asset or compounded back
              increasing the deposited veNFT balance, all as part of the
              automation!
            </li>
          </UnorderListStyle>
        </LockDescriptonTitle>

        <LockDescriptonTitle fontsize={12}>
          $TENEX is distributed to liquidity providers through emissions.
        </LockDescriptonTitle>

        <ToolTipsconentCard>
          Depositing into a strategy will extend your veNFT unlock date to
          maximum!
        </ToolTipsconentCard>

        <LockDescriptonTitle fontsize={12}>
          Withdrawal of the veNFTs is possible only after the first week. Please
          make sure the automation was run before you withdraw, the latest
          update date should be recent.
        </LockDescriptonTitle>
      </ToolTipsMainContainer>
    </ToolTipSection>
  );
};

export default RelayToolTips;
