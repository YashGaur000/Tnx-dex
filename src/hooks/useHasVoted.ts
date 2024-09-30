import { VoterContract } from '../types/Voter';

export async function checkIfVoted(
  voterContract: VoterContract,
  tokenId: bigint
): Promise<boolean> {
  if (!voterContract) {
    console.error('Voter contract instance not available');
    return false;
  }

  try {
    const hasVoted = await voterContract.hasVoted(tokenId);
    return hasVoted;
  } catch (error) {
    console.error('Error checking vote status:', error);
    return false;
  }
}
