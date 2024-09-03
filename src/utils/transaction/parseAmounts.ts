import { ethers } from 'ethers';

/**
 * Converts amounts to their corresponding values in Wei.
 * @param amount - The token amount.
 * @param decimals - The decimals for the token.
 * @returns An object with amounts in Wei.
 */
export const parseAmounts = (amount?: ethers.Numeric, decimals?: number) => {
  const amountInWei = amount
    ? ethers.parseUnits(amount.toString(), decimals)
    : undefined;

  return amountInWei;
};
