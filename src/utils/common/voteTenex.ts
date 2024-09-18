import { Metadata } from '../../types/VotingEscrow';
import { TokenInfo, ERC20_TEST_TOKEN_LIST } from '../../constants/tokens';

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
  const now = Date.now(); // Current timestamp in milliseconds
  const timeDifference = timestamp * 1000 - now; // Convert timestamp to milliseconds

  if (timeDifference <= 0) {
    return 'The date has passed.';
  }

  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysRemaining <= 0) {
    return 'The date has passed.';
  }
  return `${daysRemaining} days remaining.`;
};

export const convertToDecimal = (value: number): string => {
  const newVele = (value / 1e18).toFixed(1);
  return newVele.toString();
};
