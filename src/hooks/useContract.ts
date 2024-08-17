import { useMemo } from 'react';
import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useAccount } from './useAccount';
import { useEthersProvider } from './useEthersProvider';
import { AddressZero } from '@ethersproject/constants';
import { isAddress } from './../utils/addresses/index';
import { Address } from 'viem';

export function useContract(
  contractAddress: Address,
  ABI: ContractInterface
): Contract | undefined {
  const { chainId, address: userAddress } = useAccount();
  const provider = useEthersProvider({ chainId });

  return useMemo(() => {
    if (!isAddress(contractAddress) || contractAddress === AddressZero) {
      throw new Error(`Invalid 'address' parameter '${contractAddress}'.`);
    }

    if (!provider) {
      console.error('Provider not available');
      return undefined;
    }

    const signer = provider.getSigner(userAddress);

    return new Contract(contractAddress, ABI, signer);
  }, [contractAddress, ABI, provider, userAddress]);
}
