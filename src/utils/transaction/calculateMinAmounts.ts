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
  const minAmount =
    parseFloat(amount.toString()) -
    (parseFloat(amount.toString()) * selectedTolerance) / 100;

  // Format minAmount to match the token's decimals precision
  const formattedMinAmount = minAmount.toFixed(decimals);

  // Convert the formatted minAmount to BigNumber in Wei
  const minAmountInWei = ethers.parseUnits(formattedMinAmount, decimals);

  return minAmountInWei;
};
