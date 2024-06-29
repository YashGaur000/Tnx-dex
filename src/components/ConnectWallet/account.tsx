import { useDisconnect } from 'wagmi';
import { useEthersWeb3Provider } from '../../hooks/useEthersProvider';
import { useEffect, useState } from 'react';
import { getProvider } from '../../constants/provider';
import { useAccount } from '../../hooks/useAccount';

export function Account() {
  const { address, chainId } = useAccount();
  const { disconnect } = useDisconnect();

  const [balance, setBalance] = useState(0);

  const provider = useEthersWeb3Provider();
  const provider2 = chainId ? getProvider(chainId) : undefined;
  console.log('Provider 1----->', provider);
  console.log('Provider 2----->', provider2);

  useEffect(() => {
    const fetchBalance = async () => {
      if (provider2 && address) {
        try {
          const balance = await provider2.getBalance(address);

          setBalance(Number(balance.toString()) / 10 ** 18);
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    void fetchBalance();

    return () => {
      // Cleanup function, if needed
    };
  }, [provider2, address]);

  return (
    <div>
      <p>{address}</p>
      <p>Balance : {balance.toFixed(5)}</p>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
