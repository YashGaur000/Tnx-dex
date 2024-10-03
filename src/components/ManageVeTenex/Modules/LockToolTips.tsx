import {
  ToolTipSection,
  ToolTipsMainContainer,
  UnorderListStyle,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityToolTipStyle';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../Styles/ManageVetenex.style';

const LockToolTips = () => {
  return (
    <ToolTipSection fontSize={12}>
      <LockHeaderTitle fontSize={24}>Lock</LockHeaderTitle>
      <ToolTipsMainContainer>
        <LockDescriptonTitle fontSize={12}>
          TENEX Finance uses two tokens to manage its utility and governance:
        </LockDescriptonTitle>
        <LockDescriptonTitle fontSize={12}>
          <UnorderListStyle>
            <li>$TENEX — ERC-20 utility token of the protocol</li>
            <li>
              $veTENEX — ERC-721 governance token in the form of an NFT
              (non-fungible token)
            </li>
          </UnorderListStyle>
        </LockDescriptonTitle>
        <LockDescriptonTitle fontSize={12}>
          $TENEX is distributed to liquidity providers through emissions.
        </LockDescriptonTitle>
        <LockDescriptonTitle fontSize={12}>
          $veTENEX is used for governance. Any $TENEX holder can vote-escrow
          their tokens and receive a $veTENEX (also known as Lock or veNFT) in
          exchange. Additional tokens can be added to the $veTENEX NFT at any
          time.
        </LockDescriptonTitle>
        <LockDescriptonTitle fontSize={12}>
          The lock period (also known as vote-escrowed period, hence the ve
          prefix) can be up to 4 years, following the linear relationship shown
          below
        </LockDescriptonTitle>
        <LockDescriptonTitle fontSize={12}>
          <UnorderListStyle>
            <li>100 $TENEX locked for 4 years will become 100 $veTENEX</li>
            <li>100 $TENEX locked for 1 year will become 25 $veTENEX</li>
          </UnorderListStyle>
        </LockDescriptonTitle>
        <LockDescriptonTitle fontSize={12}>
          The longer the vesting time, the higher the voting power (voting
          weight).
        </LockDescriptonTitle>
      </ToolTipsMainContainer>
    </ToolTipSection>
  );
};

export default LockToolTips;
