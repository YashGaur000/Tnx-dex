import { Metadata, Nft, NftAttribute } from '../../types/VotingEscrow';
import { ERC20_TEST_TOKEN_LIST } from '../../constants/tokens/testnetTokens';
import { TokenInfo } from '../../constants/tokens/type';
export const MAX_LOCK_TIME = 4 * 365 * 24 * 60 * 60;
export const decodeBase64 = (base64: string): Metadata => {
  const base64Data = base64.split(',')[1];
  const binaryString = window.atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const decodedString = new TextDecoder().decode(bytes);
  const decodedStringJson = JSON.parse(decodedString) as Metadata;
  return decodedStringJson;
};

export const locktokeninfo = () => {
  const lockTokenInfo: TokenInfo = ERC20_TEST_TOKEN_LIST[1];
  return lockTokenInfo;
};

export const calculateRemainingDays = (timestamp: number): string => {
  const now = Date.now();
  const timeDifference = timestamp * 1000 - now;

  if (timeDifference <= 0) {
    return 'The date has passed.';
  }

  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysRemaining <= 0) {
    return 'The date has passed.';
  }
  return `${daysRemaining} days remaining.`;
};

export const convertToDecimal = (value: number): number => {
  const newVele = (value / 1e18).toFixed(1);
  return Number(newVele);
};
export const formatTokenAmount = (amount: number): string => {
  return (Number(amount) / 1e18).toFixed(2);
};

/**
 * Filters NFTs based on unlock date being greater than the current timestamp.
 * @param nfts - The array of NFTs to filter.
 * @returns Filtered NFTs where the unlock date is greater than the current timestamp.
 */
export const filterNftsByUnlockDate = (nfts: Nft[]): Nft[] => {
  const currentTime = Math.floor(Date.now() / 1000);
  return nfts.filter((nft) => {
    const unlockDate = nft.metadata.attributes.find(
      (attr: NftAttribute) => attr.trait_type === 'Unlock Date'
    )?.value;
    const unlockTimestamp =
      typeof unlockDate === 'string'
        ? convertDateStringToTimestamp(unlockDate)
        : null;

    console.log('unlockTimestamp', unlockTimestamp);
    return Number(unlockTimestamp) > currentTime;
  });
};
/**
 * Converts a date string (YYYY-MM-DD) to a Unix timestamp (seconds).
 * @param dateString - The date string to convert.
 * @returns The Unix timestamp in seconds, or null if the string is invalid.
 */
export const convertDateStringToTimestamp = (
  dateString: string
): number | null => {
  console.log('dateString:', dateString);
  const [year, month, day] = dateString.split('-').map(Number); // Split and convert to numbers
  const timestampInMillis = Date.UTC(year, month - 1, day); // Create a UTC timestamp (month is 0-indexed)
  return !isNaN(timestampInMillis)
    ? Math.floor(timestampInMillis / 1000)
    : null;
};
/**
 * Sorts NFTs in descending order based on the unlock date.
 * @param nfts - The array of NFTs to sort.
 * @returns NFTs sorted by unlock date in descending order.
 */
export const sortNftsByUnlockDateDesc = (nfts: Nft[]): Nft[] => {
  return nfts.sort((a, b) => {
    const aUnlockDate = a.metadata.attributes.find(
      (attr: NftAttribute) => attr.trait_type === 'Unlock Date'
    )?.value;
    const bUnlockDate = b.metadata.attributes.find(
      (attr: NftAttribute) => attr.trait_type === 'Unlock Date'
    )?.value;

    const aUnlockTimestamp =
      typeof aUnlockDate === 'string'
        ? convertDateStringToTimestamp(aUnlockDate)
        : null;
    const bUnlockTimestamp =
      typeof bUnlockDate === 'string'
        ? convertDateStringToTimestamp(bUnlockDate)
        : null;

    if (aUnlockTimestamp !== null && bUnlockTimestamp !== null) {
      return bUnlockTimestamp - aUnlockTimestamp;
    }
    return 0;
  });
};
