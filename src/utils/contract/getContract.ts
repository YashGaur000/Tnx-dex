import { AddressZero } from '@ethersproject/constants';
import { Contract, ContractInterface } from '@ethersproject/contracts';
import { isAddress } from '../addresses/index';
import { getProvider } from '../../constants/provider';
import { SupportedInterfaceChainId } from '../../constants/chain';

export function getContract(
  address: string,
  ABI: ContractInterface,
  chainId: SupportedInterfaceChainId
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw new Error(`Invalid 'address' parameter '${address}'.`);
  }

  const provider = getProvider(chainId);
  const signer = provider.getSigner();

  return new Contract(address, ABI, signer);
}
