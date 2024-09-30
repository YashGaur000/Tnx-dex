import { useCallback } from 'react';
import { useContract } from './useContract';
import { Address, isAddress } from 'viem';
import gaugeAbi from '../constants/artifacts/contracts/Gauge.json';
import { GaugeContract } from '../types/Gauge';
import { AddressZero } from '@ethersproject/constants';
import { useEthersProvider } from './useEthersProvider';
import { useAccount } from './useAccount';
import { Contract } from '@ethersproject/contracts';

/**
 * Hook to interact with the router contract.
 * @returns An object containing the functions to interact with the pool contract.
 */
export function useGaugeContract(gaugeAddress: Address) {
  const gaugeContract = useContract(
    gaugeAddress,
    gaugeAbi.abi
  ) as GaugeContract;

  const { address, chainId } = useAccount();

  const provider = useEthersProvider({ chainId });

  const getGaugeContract = useCallback(
    (gauge: Address): GaugeContract | undefined => {
      if (!isAddress(gauge) || gauge === AddressZero) {
        console.error(`Invalid 'address' parameter '${gauge}'.`);
        return undefined;
      }

      if (!provider) {
        console.error('Provider not available');
        return undefined;
      }

      const signer = provider.getSigner(address);
      return new Contract(
        gauge,
        gaugeAbi.abi,
        signer
      ) as unknown as GaugeContract;
    },
    [address, gaugeAbi, provider] // Dependencies
  );

  const deposit = useCallback(
    async (_amount: bigint) => {
      if (!gaugeContract) {
        console.error('Gauge contract instance not available');
        return;
      }
      try {
        const gasEstimate = await gaugeContract.estimateGas.deposit(_amount);

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }
        const result = await gaugeContract.deposit(_amount, {
          gasLimit: gasEstimate,
        });

        const { transactionHash } = await result.wait();

        return transactionHash;
      } catch (error) {
        console.log(error);
        return undefined;
      }
    },
    [gaugeContract]
  );

  const withdraw = useCallback(
    async (_amount: bigint) => {
      if (!gaugeContract) {
        console.error('Gauge contract instance not available');
        return;
      }
      try {
        const gasEstimate = await gaugeContract.estimateGas.withdraw(_amount);

        if (!gasEstimate) {
          console.error('Error estimating gas price');
        }
        const result = await gaugeContract.withdraw(_amount, {
          gasLimit: gasEstimate,
        });

        const { transactionHash } = await result.wait();

        return transactionHash;
      } catch (error) {
        console.log(error);
        return undefined;
      }
    },
    [gaugeContract]
  );

  const getReward = useCallback(async (gaugeInstance: GaugeContract) => {
    if (!gaugeInstance || !address) {
      console.error('Pool contract or account not available');
      return;
    }
    try {
      const gasEstimate = await gaugeInstance.estimateGas.getReward(address);

      if (!gasEstimate) {
        console.error('Error estimating gas price');
      }

      const result = await gaugeInstance.getReward(address, {
        gasLimit: gasEstimate,
      });

      const { transactionHash } = await result.wait();

      return transactionHash;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }, []);

  const totalSupply = useCallback(async () => {
    if (!gaugeContract) {
      console.error('Gauge contract instance not available');
      return;
    }
    try {
      const result = await gaugeContract.totalSupply();

      return result;
    } catch (error) {
      console.log(error);
    }
  }, [gaugeContract]);

  return { deposit, totalSupply, getReward, getGaugeContract, withdraw };
}
