import { ContractReceipt } from '@ethersproject/contracts';
import { getContract } from '../utils/contract/getContract';
import routerAbi from '../constants/artifacts/contracts/Router.json';
import address from '../constants/contract-address/address.json';
import {
  // RouterContract,
  AddLiquidityParams,
  LiquidityResult,
  RouterContract,
} from '../types/Liquidity';
import { SupportedInterfaceChainId } from '../constants/chain';

export const addLiquidity = async ({
  tokenA,
  tokenB,
  stable,
  amountADesired,
  amountBDesired,
  amountAMin,
  amountBMin,
  to,
  deadline,
  chainId,
}: AddLiquidityParams & { chainId: SupportedInterfaceChainId }): Promise<
  LiquidityResult | string
> => {
  try {
    // Ensure that all required addresses are provided
    if (!tokenA || !tokenB || !to) {
      throw new Error('One or more addresses are undefined or invalid');
    }

    const routerAddress: string = address.Router;
    const routerContract = getContract(
      to,
      routerAddress,
      routerAbi.abi,
      chainId
    ) as RouterContract;

    console.log('user address ', to, tokenA, tokenB, stable);

    console.log(await routerContract.functions.factoryRegistry());

    const tx = await routerContract.functions.addLiquidity(
      tokenA,
      tokenB,
      stable,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline
    );

    const receipt: ContractReceipt = await tx.wait();
    const eventArgs = receipt.events?.[0]?.args;

    console.log(eventArgs);

    if (!eventArgs) {
      throw new Error('Failed to retrieve liquidity event arguments');
    }

    // const { amountA, amountB, liquidity } = eventArgs[0];

    // if (!(amountA && amountB && liquidity)) {
    //   throw new Error("Invalid liquidity event arguments");
    // }

    // return {
    //   amountA,
    //   amountB,
    //   liquidity,
    // };

    return 'Todo: fetch success add liquidity params';
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to add liquidity: ${errorMessage}`);
  }
};
