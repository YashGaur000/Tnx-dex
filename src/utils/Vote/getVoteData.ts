// import { useAccount } from "wagmi";

// import { TokenInfo } from "../../constants/tokens/type";
// import { useTokenBalances } from "../../hooks/useTokenBalance";
// import { findTokenPriceBytokenInfo } from "../transaction/getTokenInfo";

// const { address } = useAccount();
// const { balances } = useTokenBalances(DOMTokenList , address!);

export const getTotalRewards = (incentives: string, fees: string) => {
  const totalRewards = Number(incentives) + Number(fees);
  return totalRewards;
};

export const getVoteVeTenexVotingPower = (
  LockvotingPower: string,
  voteWeight: number
) => {
  const veTenexVotingPower = (Number(LockvotingPower) * voteWeight) / 100;

  return veTenexVotingPower;
};

export const getEestimatedRewards = (
  veTenexVotingPower: string,
  totalRewards: string,
  totalvote: string
) => {
  const EstimatedRewards =
    (Number(veTenexVotingPower) * Number(totalRewards)) / Number(totalvote);
  return EstimatedRewards;
};

// export const getvAPR=(totalRewards:string , totalVoteOfPool:string)=>{

//     // const USDvalueOfTenex =  findTokenPriceBytokenInfo(
//     //     tokenPriceData,
//     //     "0x8Fe5C378B39DBdC984F2FfB8631227758340631A",
//     //     balances["0x8Fe5C378B39DBdC984F2FfB8631227758340631A"]
//     //   )

//     // const vAPR=(Number(totalRewards)*52*100)/(Number(totalVoteOfPool)* USDvalueOfTenex);
//     // return vAPR;

// }
