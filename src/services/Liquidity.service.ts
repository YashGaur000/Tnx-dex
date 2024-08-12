// import { Contract, ContractReceipt } from '@ethersproject/contracts';
// import { ethers } from 'ethers';
// import { getContract } from '../utils/contract/getContract';
// import routerAbi from '../constants/artifacts/contracts/Router.json';
// import address from '../constants/contract-address/address.json';
// import { AddLiquidityParams, LiquidityResult } from '../types/Liquidity';

// export const addLiquidity = async ({
//   tokenA,
//   tokenB,
//   stable,
//   amountADesired,
//   amountBDesired,
//   amountAMin,
//   amountBMin,
//   to,
//   deadline,
//   userAddress,
//   chainId,
// }: AddLiquidityParams & { userAddress: string; chainId: number }): Promise<LiquidityResult> => {
//   try {
//     const routerAddress: string = address.Router;
//     const routerContract: Contract = getContract(userAddress, routerAddress, routerAbi.abi, chainId);
//     to = userAddress;

//     console.log("user address ", to, tokenA, tokenB, stable);

//     // Ensure that all required addresses are provided
//     if (!tokenA || !tokenB || !to || !userAddress) {
//       throw new Error("One or more addresses are undefined or invalid");
//     }

//     console.log(await routerContract.functions.factoryRegistry());

//     const tx = await routerContract.functions.addLiquidity(
//       tokenA,
//       tokenB,
//       stable,
//       amountADesired,
//       amountBDesired,
//       amountAMin,
//       amountBMin,
//       to,
//       deadline
//     );

//     const receipt: ContractReceipt = await tx.wait();
//     const eventArgs = receipt.events?.[0]?.args;

//     if (!eventArgs) {
//       throw new Error("Failed to retrieve liquidity event arguments");
//     }

//     const { amountA, amountB, liquidity } = eventArgs;

//     return {
//       amountA: ethers.BigNumber.from(amountA),
//       amountB: ethers.BigNumber.from(amountB),
//       liquidity: ethers.BigNumber.from(liquidity),
//     };
//   } catch (error) {
//     // console.error("Failed to add liquidity:", error);
//     throw new Error(`Failed to add liquidity : ${error}`);
//   }
// };
