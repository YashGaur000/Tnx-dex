import { useAccount } from 'wagmi';
import { Account } from './account';
//import { WalletOptions } from './walletOptions'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <ConnectButton />;
}
