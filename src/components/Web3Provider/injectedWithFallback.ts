import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

export function injectedWithFallback() {
  return createConnector((config) => {
    const injectedConnector = injected()(config);

    return {
      ...injectedConnector,
      connect(...params) {
        if (!window.ethereum) {
          window.open('https://metamask.io/', 'inst_metamask');
        }
        return injectedConnector.connect(...params);
      },

      get name() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return !window.ethereum
          ? 'Install MetaMask'
          : window.ethereum?.isMetaMask
            ? 'MetaMask'
            : 'Browser Wallet';
      },
    };
  });
}
