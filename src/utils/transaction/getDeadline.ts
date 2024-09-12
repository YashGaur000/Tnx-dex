/**
 * Calculates the deadline for a transaction.
 * @param deadLineValue - The deadline in minutes.
 * @returns The deadline as a BigInt in seconds since the Unix epoch.
 */
export const getDeadline = (deadLineValue: number): bigint => {
  return BigInt(Math.floor(Date.now() / 1000) + 60 * deadLineValue);
};

export const getLockDuration = (LockDuration: number): number => {
  const secondsInAWeek = 7 * 24 * 60 * 60;
  const lockDurationInSeconds = LockDuration * secondsInAWeek;
  const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
  const duration = currentTimestampInSeconds + lockDurationInSeconds;

  return Math.min(duration, Number.MAX_SAFE_INTEGER);
};
