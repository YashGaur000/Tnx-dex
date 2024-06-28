import { useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useEthersWeb3Provider } from '../../hooks/useEthersProvider';
import { useEffect } from 'react';
import { getProvider } from '../../constants/provider';
import { useAccount } from '../../hooks/useAccount';
import { TOKEN_LIST } from '../../constants/tokens';

export function Account() {
  const { address, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const provider = useEthersWeb3Provider();
  const provider2 = chainId ? getProvider(chainId) : undefined;
  console.log('Provider 1----->', provider);
  console.log('Provider 2----->', provider2);

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
      <div>
        {TOKEN_LIST.map((token) => (
          <>
            <img src={token.logoURI} />
          </>
        ))}
      </div>
    </div>
  );
}
