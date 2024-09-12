import { Metadata } from '../../types/VotingEscrow';

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
