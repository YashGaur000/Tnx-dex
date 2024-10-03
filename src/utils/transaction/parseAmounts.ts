import { ethers } from 'ethers';

/**
 * Converts amounts to their corresponding values in Wei.
 * @param amount - The token amount.
 * @param decimals - The decimals for the token.
 * @returns An object with amounts in Wei.
 */
export const parseAmounts = (
  amount?: ethers.Numeric | string,
  decimals?: number
) => {
  const amountInWei = amount
    ? ethers.parseUnits(Number(amount).toFixed(decimals), decimals)
    : undefined;

  return amountInWei;
};

export const formatAmounts = (amount?: ethers.Numeric, decimals?: number) => {
  const amountInToken = amount
    ? ethers.formatUnits(amount.toString(), decimals)
    : undefined;

  return amountInToken;
};
