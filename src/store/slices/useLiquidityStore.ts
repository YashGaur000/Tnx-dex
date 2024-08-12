// // src/store/useLiquiditySlice.ts
// import {create} from 'zustand';
// import { Contract } from '@ethersproject/contracts';
// import { getContract } from '../../utils/contract/getContract';
// import routerAbi from '../../constants/artifacts/contracts/Router.json';
// import address from '../../constants/contract-address/address.json';
// import { useAccount } from '../../hooks/useAccount';
// import { addLiquidity } from '../../services/addLiquidityService';
// import { AddLiquidityParams, LiquidityResult } from '../../types/Liquidity';

// interface LiquidityState {
//   contractInstance: Contract | null;
//   liquidityResult: LiquidityResult | null;
//   initializeContractInstance: () => Contract;
//   addLiquidityAction: (params: AddLiquidityParams) => Promise<void>;
// }

// export const useLiquidityStore = create<LiquidityState>((set, get) => ({
//   contractInstance: null,
//   liquidityResult: null,

//   initializeContractInstance: () => {
//     const { contractInstance } = get();
//     if (contractInstance) {
//       return contractInstance;
//     }

//     const { chainId, address: userAddress } = useAccount();
//     const routerAddress: string = address.Router;
//     const newContractInstance = getContract(userAddress, routerAddress, routerAbi.abi, chainId);
//     set({ contractInstance: newContractInstance });
//     return newContractInstance;
//   },

//   addLiquidityAction: async (params: AddLiquidityParams) => {
//     const { initializeContractInstance } = get();
//     const contractInstance = initializeContractInstance();

//     const { address: userAddress } = useAccount();
//     params.to= userAddress;

//     try {
//       const result = await addLiquidity({ ...params },contractInstance);
//       set({ liquidityResult: result });
//     } catch (error) {
//       console.error("Failed to add liquidity:", error);
//       throw error;
//     }
//   },
// }));
