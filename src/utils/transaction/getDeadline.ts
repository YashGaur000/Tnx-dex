/**
 * Calculates the deadline for a transaction.
 * @param deadLineValue - The deadline in minutes.
 * @returns The deadline as a BigInt in seconds since the Unix epoch.
 */
export const getDeadline = (deadLineValue: number): bigint => {
  return BigInt(Math.floor(Date.now() / 1000) + 60 * deadLineValue);
};
