import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useEthersWeb3Provider } from '../../hooks/useEthersProvider';
import { useEffect } from 'react';

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const provider = useEthersWeb3Provider();
  console.log('Provider----->', provider);
  useEffect(() => {
    const fetchBalance = async () => {
      if (provider && address) {
        try {
          const balance = await provider.getBalance(address);
          console.log('Balance --------', balance.toString());
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    void fetchBalance();

    return () => {
      // Cleanup function, if needed
    };
  }, [provider, address]);

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
