import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from '../../hooks/useAccount';
import { ChainButton, GlobalButton } from '../common';
import { Container, FlexContainer, IconContainer } from './style';
import { useRootStore } from '../../store/root';
import { TransactionStatus } from '../../types/Transaction';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisconnect } from 'wagmi';
import { PopupWrapper } from '../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import PopupScreen from '../common/PopupScreen';

//import { getPoolInfo } from '../../graphql';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

const SESSION_DURATION = 2 * 60 * 60 * 1000;
const ALERT_USER_DURATION = SESSION_DURATION - 10 * 1000;

export const ConnectWallet = () => {
  const { address } = useAccount();
  const { setTransactionStatus } = useRootStore();
  const navigate = useNavigate();
  const { disconnect } = useDisconnect();
  const [showAlert, setShowAlert] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (address) {
      setElapsedTime(0); // Reset elapsed time
      setTransactionStatus(TransactionStatus.IDEAL);
      const disconnectTimeout = setTimeout(() => {
        disconnect();
      }, SESSION_DURATION);

      // Set timeout to alert user 10 seconds before expiration
      const alertTimeout = setTimeout(() => {
        //alert('Your session is about to expire in 10 seconds.');
        setShowAlert(true);
      }, ALERT_USER_DURATION);

      const timerInterval = setInterval(() => {
        setElapsedTime((prev) => prev + 1000); // Increment elapsed time by 1000ms (1 second)
      }, 1000);

      return () => {
        clearTimeout(disconnectTimeout);
        clearTimeout(alertTimeout);
        clearInterval(timerInterval);
      };
    } else {
      navigate('/');
    }
  }, [address]);

  const formatElapsedTime = (elapsed: number) => {
    const totalSeconds = Math.floor(elapsed / 1000);
    const hours = Math.floor(totalSeconds / 3600); // Get hours
    const minutes = Math.floor((totalSeconds % 3600) / 60); // Get remaining minutes
    const seconds = totalSeconds % 60; // Get remaining seconds

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

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

        const openWallet = () => {
          setTransactionStatus(TransactionStatus.IN_PROGRESS);
          openConnectModal();
        };

        const disconnectWallet = () => {
          openAccountModal();
        };

        return (
          <Container ready={ready.toString()}>
            {(() => {
              if (!connected) {
                return (
                  <GlobalButton
                    padding="10px 20px"
                    margin="0px"
                    onClick={openWallet}
                  >
                    Connect Wallet
                  </GlobalButton>
                );
              }

              if ((chain as ChainProps)?.unsupported) {
                return (
                  <GlobalButton
                    margin="0px"
                    padding="10px 20px"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </GlobalButton>
                );
              }

              return (
                <FlexContainer>
                  <p>{formatElapsedTime(elapsedTime)}</p>
                  <ChainButton
                    onClick={openChainModal}
                    width="74"
                    height="40"
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

                  <ChainButton
                    onClick={disconnectWallet}
                    width="fit-content"
                    height="40"
                    padding="12px 20px"
                  >
                    {address.substring(0, 6)}...
                  </ChainButton>
                </FlexContainer>
              );
            })()}
            {showAlert && (
              <PopupScreen
                isvisible={showAlert}
                onClose={() => setShowAlert(false)}
              >
                <PopupWrapper>
                  <p>Your Session is about to expire in 10 seconds</p>
                </PopupWrapper>
              </PopupScreen>
            )}
          </Container>
        );
      }}
    </ConnectButton.Custom>
  );
};
