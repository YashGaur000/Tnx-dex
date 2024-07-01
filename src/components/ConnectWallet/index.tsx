/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '../Header';
import { useAccount } from '../../hooks/useAccount';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

export const ConnectWallet = () => {
  const { address } = useAccount();
  return (
    <ConnectButton.Custom>
      {({
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          address &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal}>Connect Wallet</Button>
                );
              }

              if ((chain as ChainProps)?.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {(chain as ChainProps).hasIcon && (
                      <div
                        style={{
                          //background: chain.iconBackground,
                          width: 35,
                          height: 30,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {(chain as ChainProps).iconUrl && (
                          <img
                            alt={(chain as ChainProps).name ?? ''}
                            src={(chain as ChainProps).iconUrl}
                            style={{ width: 30, height: 30 }}
                          />
                        )}
                      </div>
                    )}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {address.substring(0, 6)}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
