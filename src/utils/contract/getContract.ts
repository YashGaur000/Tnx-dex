import { AddressZero } from '@ethersproject/constants';
import { Contract, ContractInterface } from '@ethersproject/contracts';
import { isAddress } from '../addresses/index';
import { getProvider } from '../../constants/provider';
import { SupportedInterfaceChainId } from '../../constants/chain';
import { Address } from 'viem';

export function getContract(
  userAddress: Address,
  contractAddress: string,
  ABI: ContractInterface,
  chainId: SupportedInterfaceChainId
): Contract {
  if (!isAddress(contractAddress) || contractAddress === AddressZero) {
    throw new Error(`Invalid 'address' parameter '${contractAddress}'.`);
  }

  const provider = getProvider(chainId);
  const signer = provider.getSigner(userAddress);

  return new Contract(contractAddress, ABI, signer);
}
