import { Metadata, Nft, NftAttribute } from '../../types/VotingEscrow';
import { ERC20_TEST_TOKEN_LIST } from '../../constants/tokens/testnetTokens';
import { TokenInfo } from '../../constants/tokens/type';
import CryptoJS from 'crypto-js';
import { envConfig } from '../../config';

export const MAX_LOCK_TIME = 4 * 365 * 24 * 60 * 60;

const SECRET_String = envConfig.wallectConnectProjectId;

export const decodeBase64 = (base64: string): Metadata => {
  if (typeof base64 !== 'string' || !base64.includes(',')) {
    throw new Error('Invalid base64 string');
  }

  const base64Data = base64.split(',')[1];
  /* if (base64Data) {
    console.log(decodeURI(base64Data));
  } */

  if (!base64Data) {
    throw new Error('Base64 data is missing');
  }

  const binaryString = window.atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const decodedString = new TextDecoder().decode(bytes);

  try {
    const decodedStringJson = JSON.parse(decodedString) as Metadata;
    return decodedStringJson;
  } catch (error) {
    throw new Error('Failed to parse JSON from decoded string');
  }
};

export const locktokeninfo = () => {
  const lockTokenInfo: TokenInfo = ERC20_TEST_TOKEN_LIST[1];
  return lockTokenInfo;
};

export const calculateRemainingDays = (timestamp: number): string => {
  const now = new Date();
  const timeDifference = timestamp * 1000;
  const targetDate = new Date(timeDifference);

  let years = targetDate.getFullYear() - now.getFullYear();
  let months = targetDate.getMonth() - now.getMonth();
  let days = targetDate.getDate() - now.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(
      targetDate.getFullYear(),
      targetDate.getMonth() + 1,
      0
    ).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let output = '';

  if (years > 0) {
    output += `${years} year${years > 1 ? 's' : ''} `;
  }

  if (months > 0) {
    output += `${months} month${months > 1 ? 's' : ''} `;
  }

  if (days > 0) {
    output += `${days} day${days > 1 ? 's' : ''} `;
  }

  return output.trim() || '0 days';
};

export const convertToDecimal = (value: number): number => {
  const newVele = (value / 1e18).toFixed(1);
  return Number(newVele);
};
export const formatTokenAmount = (amount: number): number => {
  const frmTknAmt = (Number(amount) / 1e18).toFixed(2);
  return Number(frmTknAmt);
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
  const [year, month, day] = dateString.split('-').map(Number);
  const timestampInMillis = Date.UTC(year, month - 1, day);
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

export const getTimeDifference = (targetDateString: string): string => {
  const currentDate = new Date();
  const targetDate = new Date(targetDateString);

  const diffTime = targetDate.getTime() - currentDate.getTime();

  if (diffTime < 0) {
    return 'Expired';
  }

  let years = targetDate.getFullYear() - currentDate.getFullYear();
  let months = targetDate.getMonth() - currentDate.getMonth();
  let days = targetDate.getDate() - currentDate.getDate();
  const hours = Math.floor(diffTime / (1000 * 60 * 60));

  if (days < 0) {
    months -= 1;
    days += new Date(
      targetDate.getFullYear(),
      targetDate.getMonth() + 1,
      0
    ).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let output = '';

  if (years > 1) {
    output += `${years} years, `;
  } else if (years != 0) {
    output += `${years} year, `;
  }

  if (months > 1) {
    output += `${months} months, `;
  } else if (months != 0) {
    output += `${months} month, `;
  }

  if (days > 1) {
    output += `${days} days `;
  } else if (days !== 0) {
    output += `${days} day `;
  } else {
    output += '';
  }

  if (years === 0 && days === 0 && months === 0) {
    if (hours > 1) {
      output += `${hours} hours `;
    } else {
      output += `${hours} hour `;
    }
  }

  return output.trim();

  /* return `${years < 2 ? ` ${years} year` : ''}${years > 1 ? ` ${years} years, ` : ''}${
    months > 1 ? ` ${months} months, ` : ''
  }${
    months === 1 ? `${months} month, ` : ''
  }${days === 1 ? ` ${days} day` : ''}${days > 1 ? ` ${days} days` : ''}`; */
};

export const convertDateToTimestamp = (dateString: string): number => {
  const date = new Date(dateString);
  return Math.floor(date.getTime() / 1000);
};

export function convertTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function calVotingPower(end: number, amount: number) {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeRemaining = Number(end) > currentTime ? end - currentTime : 0;
  const votingPower = Number(amount) * (timeRemaining / MAX_LOCK_TIME);
  return votingPower;
}
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const convertWeeksToYearsMonthsDays = (weeks: number) => {
  const daysInWeek = 7;
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysInYear = 365;

  let totalDays = weeks * daysInWeek;
  let years = 0;
  let months = 0;
  let days = 0;

  // Handle leap years by adjusting February
  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  // Calculate years
  while (totalDays >= daysInYear) {
    years++;
    totalDays -= isLeapYear(1970 + years) ? 366 : 365; // Adjust for leap years starting from 1970
  }

  // Calculate months
  const daysInThisYear = isLeapYear(1970 + years)
    ? [...daysInMonths.slice(0, 1), 29, ...daysInMonths.slice(2)]
    : daysInMonths;
  for (let i = 0; i < 12; i++) {
    if (totalDays >= daysInThisYear[i]) {
      months++;
      totalDays -= daysInThisYear[i];
    } else {
      break;
    }
  }

  // Remaining days
  days = totalDays;

  return { years, months, days };
};

export const encryptData = (data: string) => {
  const ciphertext = CryptoJS.AES.encrypt(data, SECRET_String).toString();
  const again = ciphertext
    .replace('+', 'tNl78k')
    .replace(/\//g, 'Noid34')
    .replace('=', 'TENEX2345');

  return again
    .replace('+', 'tNl78k')
    .replace('/', 'Noid34')
    .replace('=', 'TENEX2345');
};

export const decryptData = (encryptedData: string) => {
  const byteCode = encryptedData
    .toString()
    .replace('tNl78k', '+')
    .replace(/Noid34/g, '/')
    .replace('TENEX2345', '=');
  const bytes = CryptoJS.AES.decrypt(byteCode, SECRET_String);
  if (!bytes) {
    throw new Error('Failed to decrypt data or invalid key');
  }
  const decryptdata = bytes.toString(CryptoJS.enc.Utf8);
  if (!decryptdata) throw new Error('Failed to decrypt data ' + decryptdata);
  return decryptdata;
};

export function calculateTimeLeft(epochEnd: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const currentTime = Math.floor(Date.now() / 1000);
  const remainingTime = epochEnd - currentTime;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;

    return { days, hours, minutes, seconds };
  }

  // Return 0 for all units if the remaining time is 0 or negative
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}
