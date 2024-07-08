/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';
import { Button } from '../Header';
import { useAccount } from '../../hooks/useAccount';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

const Container = styled.div<{ ready: boolean }>`
  ${({ ready }: { ready: boolean }) =>
    !ready &&
    `
    aria-hidden: true;
    opacity: 0;
    pointer-events: none;
    user-select: none;
  `}
`;

const IconContainer = styled.div<{ background: string }>`
  width: 35px;
  height: 30px;
  border-radius: 999px;
  overflow: hidden;
  margin-right: 4px;
  background: ${({ background }) => background};
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ChainButton = styled.button<{ padding: string }>`
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding};
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

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
          <Container ready={ready}>
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal}>Connect Wallet</Button>
                );
              }

              if ((chain as ChainProps)?.unsupported) {
                return (
                  <Button onClick={openChainModal} type="button">
                    Wrong network
                  </Button>
                );
              }

              return (
                <FlexContainer>
                  <ChainButton
                    onClick={openChainModal}
                    type="button"
                    padding="11px 20px"
                  >
                    {(chain as ChainProps).hasIcon && (
                      <IconContainer
                        background={(chain as ChainProps).iconBackground}
                      >
                        {(chain as ChainProps).iconUrl && (
                          <img
                            alt={(chain as ChainProps).name ?? ''}
                            src={(chain as ChainProps).iconUrl}
                            style={{ width: 30, height: 30 }}
                          />
                        )}
                      </IconContainer>
                    )}
                  </ChainButton>

                  <ChainButton onClick={openAccountModal} padding="12px 20px">
                    {address.substring(0, 6)}
                  </ChainButton>
                </FlexContainer>
              );
            })()}
          </Container>
        );
      }}
    </ConnectButton.Custom>
  );
};
