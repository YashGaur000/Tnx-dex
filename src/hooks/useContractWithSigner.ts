// import { useMemo } from 'react';
// import { Contract, ContractInterface } from '@ethersproject/contracts';
// import { getContract } from './../utils/contract/getContract';
// import { useAccount } from './useAccount';

// export const useContractWithSigner = (
//   contractAddress: string,
//   ABI: ContractInterface,
// ): Contract | null => {
//   const {chainId, address} =useAccount();
//   return useMemo(() => {
//     if (!contractAddress || !ABI ) return null;
//     try {
//       return getContract(address, contractAddress, ABI, chainId);
//     } catch (error) {
//       console.error('Failed to create contract instance:', error);
//       return null;
//     }
//   }, [contractAddress, ABI]);
// };
