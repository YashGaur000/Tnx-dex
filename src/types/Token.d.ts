import { Contract, ContractTransaction } from '@ethersproject/contracts';

interface Erc20Contract extends Contract {
  approve(spender: string, amount: BigNumber): Promise<ContractTransaction>;
}
