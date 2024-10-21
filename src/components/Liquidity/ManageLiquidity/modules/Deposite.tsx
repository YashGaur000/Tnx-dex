import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import RedLockIcon from '../../../../assets/lock.png';
import UnLockIcon from '../../../../assets/LockSucess.svg';
import SearchIcon from '../../../../assets/search.png';
import DurationIcon from '../../../../assets/Duration.svg';
import SucessDepositIcon from '../../../../assets/gradient-party-poper.svg';
import LockIcon from '../../../../assets/Lock1.svg';
import Stepper from '../../../common/Stepper';
import React, { useEffect, useState } from 'react';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { testErc20Abi } from './../../../../constants/abis/testErc20';
import { useTokenAllowance } from '../../../../hooks/useTokenAllowance';
import { ethers } from 'ethers';
import { GlobalButton, GradientButton } from '../../../common/index';
import { useRouterContract } from '../../../../hooks/useRouterContract';
import { useAccount } from '../../../../hooks/useAccount';
import contractAddress from '../../../../constants/contract-address/address';
import { StepperDataProps } from '../../../../types/Stepper';
import SuccessPopup from '../../../common/SucessPopup';
import SlippageTolerance from '../../../common/SlippageTolerance';
import PopupScreen from '../../../common/PopupScreen';
import { PopupWrapper } from '../../LiquidityHomePage/styles/LiquidityHeroSection.style';
import TransactionDeadline from '../../../common/TransactionDeadline';
import { useLiquidityStore } from '../../../../store/slices/liquiditySlice';
import { useRootStore } from '../../../../store/root';
import { parseAmounts } from './../../../../utils/transaction/parseAmounts';
import { calculateMinAmount } from './../../../../utils/transaction/calculateMinAmounts';
import { getDeadline } from './../../../../utils/transaction/getDeadline';
import { useNavigate } from 'react-router-dom';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../../types/Transaction';
import { useCheckAllowance } from '../../../../hooks/useCheckAllowance';
import { LoadingSpinner } from '../../../common/Loader';
import useTransactionWarning from '../../../../hooks/useTransactionWarning';
import { ButtonsSideBySide } from '../../../common/Buttons/GlobalButton';
import {
  findTokenBySymbol,
  getTokenInfo,
} from '../../../../utils/transaction/getTokenInfo';
interface DepositProps {
  disabled1?: boolean;
  disabled2?: boolean;
  amount1?: ethers.Numeric;
  amount2?: ethers.Numeric;
}

const Deposite: React.FC<DepositProps> = ({
  disabled1,
  disabled2,
  amount1,
  amount2,
}) => {
  const [isToken1Allowed, setIsToken1Allowed] = useState(false);
  const [isToken2Allowed, setIsToken2Allowed] = useState(false);
  const [isDeposited, setIsDeposited] = useState(false);
  const [isvisibleSlippage, setVisibleSlippage] = useState(false);
  const [isvisibleDeadline, setVisibleDealine] = useState(false);
  const [isAllowingToken1, setIsAllowingToken1] = useState(false);
  const [isAllowingToken2, setIsAllowingToken2] = useState(false);

  const getParam = useQueryParams();
  const Navigate = useNavigate();
  const { address } = useAccount();
  const wethAddress = findTokenBySymbol('WETH');

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const routerAddress = contractAddress.Router;
  const { deadLineValue } = useLiquidityStore();
  const { selectedTolerance, transactionStatus, setTransactionStatus } =
    useRootStore();
  const { addLiquidity, addLiquidityETH, poolFor } = useRouterContract();

  const { approveAllowance: approveAllowance1 } = useTokenAllowance(
    selectedToken1!.address,
    testErc20Abi
  );

  const { approveAllowance: approveAllowance2 } = useTokenAllowance(
    selectedToken2!.address,
    testErc20Abi
  );

  useCheckAllowance(
    selectedToken1!,
    amount1?.toString() ?? '0',
    address!,
    routerAddress,
    setIsToken1Allowed
  );

  useCheckAllowance(
    selectedToken2!,
    amount2?.toString() ?? '0',
    address!,
    routerAddress,
    setIsToken2Allowed
  );

  useEffect(() => {
    if (selectedToken1?.symbol === 'ETH') {
      setIsToken1Allowed(true);
    } else if (selectedToken2?.symbol === 'ETH') {
      setIsToken2Allowed(true);
    }
  }, []);

  // Trigger the hook with the current transaction status
  useTransactionWarning(transactionStatus);

  const handleAllowToken1 = async () => {
    setIsAllowingToken1(true);
    setTransactionStatus(TransactionStatus.IN_PROGRESS);
    try {
      const amount1InWei =
        amount1 &&
        ethers.parseUnits(amount1.toString(), selectedToken1?.decimals);
      if (amount1InWei && selectedToken1?.address) {
        if (selectedToken1?.symbol === 'ETH') {
          setIsToken1Allowed(true);
        } else {
          await approveAllowance1(routerAddress, amount1InWei.toString());
          setIsToken1Allowed(true);
        }
      }

      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
      }, TRANSACTION_DELAY);
    } catch (error) {
      console.error('Error during token approval', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    } finally {
      setIsAllowingToken1(false);
      setTransactionStatus(TransactionStatus.IDEAL);
      // Re-enable the button after the operation completes
    }
  };

  const handleAllowToken2 = async () => {
    setIsAllowingToken2(true);
    setTransactionStatus(TransactionStatus.IN_PROGRESS);
    try {
      const amount2InWei =
        amount2 &&
        ethers.parseUnits(amount2.toString(), selectedToken2?.decimals);
      if (amount2InWei && selectedToken2?.address) {
        if (selectedToken2?.symbol === 'ETH') {
          setIsToken1Allowed(true);
        } else {
          await approveAllowance2(routerAddress, amount2InWei.toString());
          setIsToken2Allowed(true);
        }
      }
      setTransactionStatus(TransactionStatus.DONE);
      setTimeout(() => {
        setTransactionStatus(TransactionStatus.IDEAL);
      }, TRANSACTION_DELAY);
    } catch (error) {
      console.error('Error during token approval', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    } finally {
      setIsAllowingToken2(false);
      setTransactionStatus(TransactionStatus.IDEAL);
      // Re-enable the button after the operation completes
    }
  };

  const handleStakeDeposit = () => {
    const type = getParam('type') == '0';
    const factoryAddress = contractAddress.PoolFactory;
    if (selectedToken1 && selectedToken2 && wethAddress) {
      let token0 = selectedToken1;
      let token1 = selectedToken2;
      if (token0.symbol == 'ETH')
        token0 = getTokenInfo(wethAddress) ?? selectedToken1;
      else if (token1.symbol == 'ETH')
        token1 = getTokenInfo(wethAddress) ?? selectedToken2;
      poolFor(token0, token1, type, factoryAddress)
        .then((poolAddress) => {
          if (poolAddress) {
            Navigate({
              pathname: '/stake',
              search: `?pool=${poolAddress.toString()}`,
            });
          }
        })
        .catch((error) => {
          console.error('Error loading stake:', error);
        });
    }
  };

  const handleStakeLater = () => {
    Navigate('/dashboard');
  };

  const handleAdjust = (adjustbuttonName: string) => {
    if (adjustbuttonName === 'Slippage') {
      setVisibleSlippage(true);
      setVisibleDealine(false);
    } else if (adjustbuttonName === 'deadline') {
      setVisibleSlippage(false);
      setVisibleDealine(true);
    } else {
      console.log('wrong button');
    }
  };
  const closeModal = () => {
    setVisibleDealine(false);
    setVisibleSlippage(false);
  };

  const handleDeposit = async () => {
    try {
      if (transactionStatus === TransactionStatus.IN_PROGRESS) return;
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const amount1InWei = parseAmounts(amount1, selectedToken1?.decimals);
      const amount2InWei = parseAmounts(amount2, selectedToken2?.decimals);

      const minAmount1InWei = calculateMinAmount(
        amount1 ?? 0,
        parseFloat(selectedTolerance) ?? 1,
        selectedToken1?.decimals ?? 18
      );
      const minAmount2InWei = calculateMinAmount(
        amount2 ?? 0,
        parseFloat(selectedTolerance) ?? 1,
        selectedToken2?.decimals ?? 18
      );

      const type = getParam('type') == '0';
      const deadline = getDeadline(deadLineValue);

      if (
        amount1InWei &&
        amount2InWei &&
        selectedToken1?.address &&
        selectedToken2?.address &&
        address
      ) {
        if (selectedToken1?.symbol === 'ETH') {
          const tx = await addLiquidityETH(
            selectedToken2?.address,
            type,
            amount2InWei,
            minAmount2InWei,
            amount1InWei,
            address,
            deadline
          );
          console.log('Eth Liquidity added:', tx);
          setIsDeposited(true);
        } else {
          const tx = await addLiquidity(
            selectedToken1?.address,
            selectedToken2?.address,
            type,
            amount1InWei,
            amount2InWei,
            minAmount1InWei,
            minAmount2InWei,
            address,
            deadline
          );
          console.log('Liquidity added:', tx);
          setIsDeposited(true);
          setTransactionStatus(TransactionStatus.DONE);
          setTimeout(() => {
            setTransactionStatus(TransactionStatus.IDEAL);
          }, TRANSACTION_DELAY);
        }
      }
    } catch (error) {
      console.error('Error adding liquidity:', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    }
  };

  const CreatepoolDepositeData: StepperDataProps[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions:
        amount1 && amount2
          ? {
              labels: `Using your quote for new liquidity pool deposits `,
              token1: `${Number(amount1).toFixed(5)} ${selectedToken1?.symbol}`,
              token2: `${Number(amount2).toFixed(5)} ${selectedToken2?.symbol}`,
            }
          : {
              labels: `Setting  quote for new liquidity pool deposits`,
            },
    },
    {
      step: 2,
      icon: PlusIcon,
      descriptions: {
        labels: `${selectedTolerance} % slippage applied...`,
        adjust: 'Adjust',
        onClick: () => {
          handleAdjust('Slippage');
        },
      },
    },
    {
      step: 3,
      icon: DurationIcon,
      descriptions: {
        labels: `${deadLineValue} min transaction deadline applied...`,
        adjust: 'Adjust',
        onClick: () => {
          handleAdjust('deadline');
        },
      },
    },
  ];

  if (!disabled1 && selectedToken1?.symbol !== 'ETH') {
    CreatepoolDepositeData.push({
      step: 3,
      icon: !isToken1Allowed ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels: isToken1Allowed
          ? 'Allowed the contracts to access ' + selectedToken1?.symbol
          : 'Allowance not granted for ' + selectedToken1?.symbol,
      },
      buttons:
        (!isToken1Allowed &&
          transactionStatus != TransactionStatus.IN_PROGRESS) ||
        isAllowingToken1
          ? {
              label: 'Allow ' + selectedToken1?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken1,
              tooltip: 'Click to allow USDT transactions',
              disabled:
                isAllowingToken1 &&
                transactionStatus === TransactionStatus.IN_PROGRESS,
              inProgress: isAllowingToken1,
            }
          : undefined,
    });
  }

  if (!disabled2 && selectedToken2?.symbol !== 'ETH') {
    CreatepoolDepositeData.push({
      step: 4,
      icon: !isToken2Allowed ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels: isToken2Allowed
          ? 'Allowed the contracts to access ' + selectedToken2?.symbol
          : 'Allowance not granted for ' + selectedToken2?.symbol,
      },
      buttons:
        (!isToken2Allowed &&
          transactionStatus != TransactionStatus.IN_PROGRESS) ||
        isAllowingToken2
          ? {
              label: 'Allow ' + selectedToken2?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken2,
              tooltip: 'Click to allow FTM transactions',
              disabled: isAllowingToken2,
              inProgress: isAllowingToken2,
            }
          : undefined,
    });
  }

  CreatepoolDepositeData.push({
    step: 5,
    icon: !isDeposited ? SearchIcon : SucessDepositIcon,
    descriptions: {
      labels: isDeposited ? 'Deposit confirmed' : 'Waiting for next actions...',
    },
    actionCompleted: !isDeposited,
  });

  return (
    <>
      <Stepper data={CreatepoolDepositeData} />
      {!isDeposited && isToken1Allowed && isToken2Allowed && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={() => {
            if (transactionStatus === TransactionStatus.IN_PROGRESS) return;
            handleDeposit()
              .then(() => {
                <SuccessPopup message="Deposit Successfully" />;
              })
              .catch((error) => {
                console.error('Error adding liquidity:', error);
              });
          }}
          disabled={
            transactionStatus === TransactionStatus.IN_PROGRESS ? true : false
          }
        >
          {transactionStatus === TransactionStatus.IN_PROGRESS ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <LoadingSpinner width="10px" height="10px" />
              <p>Depositing</p>
            </div>
          ) : (
            <p>Deposit</p>
          )}
        </GlobalButton>
      )}

      {isDeposited && (
        <ButtonsSideBySide>
          <ButtonsSideBySide onClick={handleStakeLater}>
            <GradientButton width="40%" height="48px" fontSize="16px">
              Stake later{' '}
            </GradientButton>
          </ButtonsSideBySide>
          <GlobalButton
            width="40%"
            height="48px"
            margin="20px"
            onClick={handleStakeDeposit}
          >
            Stake now{' '}
          </GlobalButton>
        </ButtonsSideBySide>
      )}

      {isvisibleSlippage && !isvisibleDeadline && (
        <PopupScreen isvisible={isvisibleSlippage} onClose={closeModal}>
          <PopupWrapper>
            <SlippageTolerance />
          </PopupWrapper>
        </PopupScreen>
      )}

      {!isvisibleSlippage && isvisibleDeadline && (
        <PopupScreen isvisible={isvisibleDeadline} onClose={closeModal}>
          <PopupWrapper>
            <TransactionDeadline />
          </PopupWrapper>
        </PopupScreen>
      )}
    </>
  );
};

export default Deposite;
