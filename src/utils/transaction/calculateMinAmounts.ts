import { ethers } from 'ethers';

/**
 * Calculates the minimum amounts with a selected tolerance and converts them to Wei.
 * @param amount - The token amount.
 * @param selectedTolerance - The slippage tolerance percentage.
 * @param decimals - The decimals for the token.
 * @returns An object with minimum amounts in Wei.
 */
export const calculateMinAmount = (
  amount: ethers.Numeric,
  selectedTolerance: number,
  decimals: number
) => {
  const minAmount = (parseFloat(amount.toString()) * selectedTolerance) / 100;
  const minAmountInWei = ethers.parseUnits(minAmount.toString(), decimals);

  return minAmountInWei;
};
