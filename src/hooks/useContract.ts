import { useMemo } from 'react';
import { Contract, ContractInterface } from '@ethersproject/contracts';
import { useAccount } from './useAccount';
import { useEthersProvider } from './useEthersProvider';
import { AddressZero } from '@ethersproject/constants';
import { isAddress } from './../utils/addresses/index';
import { Address } from 'viem';
import { RouterContract } from '../types/Liquidity';
import { VoterContract } from '../types/Voter';
import { BribeVotingRewardContract } from '../types/Bribe';
import { PoolContract } from '../types/Pool';
import { GaugeContract } from '../types/Gauge';
import { getProvider } from '../constants/provider';

export function useContract(
  contractAddress: Address,
  ABI: ContractInterface
):
  | Contract
  | RouterContract
  | VoterContract
  | BribeVotingRewardContract
  | PoolContract
  | GaugeContract
  | undefined {
  const { chainId, address: userAddress } = useAccount();
  const provider = useEthersProvider({ chainId });

  return useMemo(() => {
    if (!isAddress(contractAddress) || contractAddress === AddressZero) {
      // throw new Error(`Invalid 'address' parameter '${contractAddress}'.`);
      // console.error(`Invalid 'address' parameter '${contractAddress}'.`);
      return undefined;
    }

    if (!provider) {
      console.error('Provider not available');
      return undefined;
    }

    if (!userAddress) {
      const privateProvider = getProvider();
      return new Contract(contractAddress, ABI, privateProvider);
    }

    const signer = provider.getSigner(userAddress);

    return new Contract(contractAddress, ABI, signer);
  }, [contractAddress, ABI, provider, userAddress]);
}
