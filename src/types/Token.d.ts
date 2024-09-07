import { Contract, ContractTransaction } from '@ethersproject/contracts';
import { Address } from 'viem';

interface Erc20Contract extends Contract {
  approve(spender: Address, amount: BigNumber): Promise<ContractTransaction>;
  allowance(owner: Address, spender: Address): Promise<bigint>;
}
