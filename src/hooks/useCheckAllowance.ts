import { useEffect, useCallback } from 'react';
import { TokenInfo } from '../constants/tokens';
import { Address } from 'viem';
import { useTokenAllowance } from './useTokenAllowance';
import { testErc20Abi } from '../constants/abis/testErc20';
import { formatAmounts } from '../utils/transaction/parseAmounts';

export const useCheckAllowance = (
  token: TokenInfo,
  tokenInput: string,
  account: Address,
  spender: Address,
  setIsSufficientAllowance: (isTokenAllow: boolean) => void
) => {
  const { checkAllowance } = useTokenAllowance(token.address, testErc20Abi);

  const fetchAllowance = useCallback(async () => {
    if (account && tokenInput && token) {
      try {
        const allowance = await checkAllowance(account, spender);
        const formattedAllowance = formatAmounts(allowance, token.decimals);
        setIsSufficientAllowance(
          Number(formattedAllowance) >= Number(tokenInput)
        );
      } catch (error) {
        console.error('Error checking allowance:', error);
        setIsSufficientAllowance(false);
      }
    }
  }, [account, tokenInput, token, checkAllowance, spender]);

  useEffect(() => {
    if (tokenInput && token) {
      void fetchAllowance();
    }
  }, [tokenInput, token, account, fetchAllowance]);

  return { fetchAllowance };
};
