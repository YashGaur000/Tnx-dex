import {
  LiquityContainer,
  Step,
  StepCommon,
  StepImage,
  StepLabel,
  StepLine,
  StepperContainer,
} from '../styles/LiquityRouting.style';
import FwdIcon from '../../../assets/fwd-arrow.png';
import { Route } from '../../../utils/liquidityRouting/generateAllRoutes';
import { useEffect, useState } from 'react';
import { findTokenByAddress } from '../../../hooks/useTokenInfo';
import { TokenInfo } from '../../../constants/tokens/type';
import { LoadingSpinner } from '../../common/Loader';
import { useRouterContract } from '../../../hooks/useRouterContract';
import { formatAmounts } from '../../../utils/transaction/parseAmounts';
import { useRootStore } from '../../../store/root';

const LiquityRouting = ({
  route,
  isLoading,
  amountsOut,
}: {
  route: Route[] | null;
  isLoading: boolean;
  amountsOut: bigint[] | null;
}) => {
  const [srcToken, setSrcToken] = useState<TokenInfo | undefined>(undefined);
  const [destTokens, setDestToken] = useState<TokenInfo[]>([]);
  const [stable, setStable] = useState<boolean[]>([]);
  const { getReserves } = useRouterContract();
  const { setPriceImpact } = useRootStore();

  useEffect(() => {
    if (!route || !amountsOut) return;

    async function fetchData() {
      let totalImpact = 1; // Start with neutral impact

      if (route) {
        const [token1, tokens, stableFactor] = route.reduce(
          ([src, dest, stable], r, index) => {
            if (index === 0) {
              src = findTokenByAddress(r.from);
            }
            dest.push(findTokenByAddress(r.to)!);
            stable.push(r.stable);
            return [src, dest, stable];
          },
          [undefined, [], []] as [TokenInfo | undefined, TokenInfo[], boolean[]]
        );

        setSrcToken(token1);
        setDestToken(tokens);
        setStable(stableFactor);

        // Iterate through each hop in the route and calculate price impact
        for (let i = 0; i < route.length; i++) {
          const r = route[i];
          const src = findTokenByAddress(r.from);
          const dest = findTokenByAddress(r.to);

          // Fetch reserves for the current pool
          const poolReserve = await getReserves(src!, dest!, r.stable);

          const amountOut = amountsOut
            ? formatAmounts(amountsOut[i + 1], dest?.decimals)
            : undefined;

          if (amountOut) {
            // Calculate the price impact for the current hop
            const reserveA = Number(poolReserve?.formatedReserveA);
            const priceImpactHop =
              1 - reserveA / (reserveA + Number(amountOut));

            // Compound the price impact across all hops
            totalImpact = totalImpact * (1 - priceImpactHop);
          }
        }
      }

      // Calculate the final price impact
      const finalPriceImpact = (1 - totalImpact) * 100;
      setPriceImpact(finalPriceImpact.toFixed(5));
    }

    void fetchData();
  }, [route, amountsOut]);

  if (!route)
    return (
      <LiquityContainer>
        <StepperContainer>
          {isLoading ? <LoadingSpinner /> : 'No Path Exists'}
        </StepperContainer>
      </LiquityContainer>
    );

  return (
    <LiquityContainer>
      <StepperContainer>
        {!isLoading ? (
          <>
            <StepCommon>
              <StepImage src={srcToken?.logoURI} alt="Icon 1" />
            </StepCommon>
            {destTokens.map((token, i) => (
              <>
                <StepLine />
                <Step>
                  <StepImage src={FwdIcon} alt="Icon 2" />
                  {stable[i] ? (
                    <StepLabel>
                      0.05%
                      <br />
                      Stable
                    </StepLabel>
                  ) : (
                    <StepLabel>
                      0.3%
                      <br />
                      Volatile
                    </StepLabel>
                  )}
                </Step>
                <StepCommon>
                  <StepImage src={token.logoURI} alt="Icon 3" />
                </StepCommon>
              </>
            ))}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </StepperContainer>
    </LiquityContainer>
  );
};

export default LiquityRouting;
