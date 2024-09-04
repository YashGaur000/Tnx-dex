import { useState, useEffect } from 'react';
import { useContract } from './useContract';
import poolAbi from '../constants/artifacts/contracts/Pool.json';
import { formatUnits } from 'ethers';
import { useAccount } from './useAccount';
import { PoolContract } from '../types/Pool';
import { Address } from 'viem';

/**
 * Hook to interact with the POOL contract.
 * @returns An object containing the balances of tokens 0 and 1 in ethers, or null if not yet loaded.
 */
export function usePoolBalances(
  poolId: string,
  decimal0: number,
  decimal1: number
) {
  const [balance0, setBalance0] = useState<string>('0.0');
  const [balance1, setBalance1] = useState<string>('0.0');
  const [reserve0, setReserve0] = useState<string>('0.0');
  const [reserve1, setReserve1] = useState<string>('0.0');
  const poolContract = useContract(
    poolId as Address,
    poolAbi.abi
  ) as PoolContract;
  const { address } = useAccount();

  useEffect(() => {
    if (!poolId) {
      // If poolId is not valid, skip the fetching logic
      setBalance0('0.0');
      setBalance1('0.0');
      setReserve0('0.0');
      setReserve1('0.0');
      return;
    }
    const fetchBalances = async () => {
      try {
        if (poolContract && address) {
          // Fetch values from the pool contract
          const [reserve0, reserve1, totalSupply, userBalance] =
            await Promise.all([
              poolContract.reserve0(),
              poolContract.reserve1(),
              poolContract.totalSupply(),
              poolContract.balanceOf(address),
            ]);

          // Calculate balances for token 0 and token 1
          const userBalanceInEther = parseFloat(
            formatUnits(
              userBalance.toString(),
              decimal0 > decimal1 ? decimal0 - decimal1 : decimal1 - decimal0
            )
          );
          const reserve0InEther = parseFloat(
            formatUnits(reserve0.toString(), decimal0)
          );
          const reserve1InEther = parseFloat(
            formatUnits(reserve1.toString(), decimal1)
          );
          const totalSupplyInEther = parseFloat(
            formatUnits(
              totalSupply.toString(),
              decimal0 > decimal1 ? decimal0 - decimal1 : decimal1 - decimal0
            )
          );

          const balance0 =
            (userBalanceInEther / totalSupplyInEther) * reserve0InEther;
          const balance1 =
            (userBalanceInEther / totalSupplyInEther) * reserve1InEther;

          // Format and set balances
          setBalance0(balance0.toFixed(6));
          setBalance1(balance1.toFixed(6));
          setReserve0(reserve0InEther.toFixed(6));
          setReserve1(reserve1InEther.toFixed(6));
        }
      } catch (error) {
        console.error('Error fetching balances:', error);
        setBalance0('0.0');
        setBalance1('0.0');
        setReserve0('0.0');
        setReserve0('0.0');
      }
    };

    void fetchBalances(); // Explicitly mark the promise as ignore
  }, [poolContract, address, decimal0, decimal1, poolId]);

  return { balance0, balance1, reserve0, reserve1 };
}
