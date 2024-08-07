import { LiquidityTitle } from '../styles/LiquidityHeroSection.style';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import {
  LiquidityToolTipSection,
  UnorderListStyle,
} from '../styles/LiquidityToolTipStyle';

const LiquidityToolTips = () => {
  return (
    <LiquidityToolTipSection fontSize={12}>
      <LiquidityHeaderTitle fontSize={20}>Liquidity Pools</LiquidityHeaderTitle>
      <LiquidityTitle fontSize={12}>
        The core functionality of TENEX Finance is to allow users to exchange
        tokens in a secure way, with low fees and low slippage.
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        Slippage is the difference between the current market price of a token
        and the price at which the actual exchange/swap is executed. This
        difference could result in a smaller amount (higher price paid) or a
        higher amount (smaller price paid) of desired tokens returned from a
        swap.
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        To provide access to the best rates on the market, we identified two
        types of tokens:
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        <UnorderListStyle>
          <li>correlated - for example stable coins ($USDC, $DAI, etc.)</li>
          <li>uncorrelated - for example $LINK and $TENEX</li>
        </UnorderListStyle>
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        TENEX Finance offers two different liquidity pool types based on token
        pair needs, Stable Pools and Volatile Pools. TENEX v2 supports custom
        factories, so that new pool types can always be integrated.
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        The protocol router evaluates both pool types to determine the most
        efficient price quotation and trade execution route available. To
        protect against flashloan attacks, the router will use 30-minute TWAPs
        (time-weighted average prices). The router doesn&apos;t require upkeep
        (external maintenance).
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        The deeper the liquidity of a given pool (higher value locked), the
        smaller the slippage it will offer.
      </LiquidityTitle>
      <LiquidityHeaderTitle fontSize={16}>Fees</LiquidityHeaderTitle>
      <LiquidityTitle fontSize={12}>
        On TENEX Finance the trading fees are kept in the originally traded
        tokens (if you trade $USDC and $TENEX the fees will be kept in the same
        tokens).
      </LiquidityTitle>
      <LiquidityTitle fontSize={12}>
        The default trading fees for both liquidity pool types are 0.02%, and
        can be individually adjusted for each pool up to 1%.
      </LiquidityTitle>

      <LiquidityHeaderTitle fontSize={16}>Stable Pools</LiquidityHeaderTitle>
      <div>
        <LiquidityTitle fontSize={12}>
          Stable pools are designed for tokens which have little to no
          volatility. This means that the formula used for pricing the tokens
          allows for low slippage even on large traded volumes.
        </LiquidityTitle>
        <p>x³y + y³x ≥ k</p>
      </div>

      <LiquidityHeaderTitle fontSize={16}>Volatile Pools</LiquidityHeaderTitle>
      <div>
        <LiquidityTitle fontSize={12}>
          Volatile pools are designed for tokens with high price volatility.
          These pools use a generic AMM formula.
        </LiquidityTitle>
        <p>x × y ≥ k</p>
      </div>
    </LiquidityToolTipSection>
  );
};

export default LiquidityToolTips;
