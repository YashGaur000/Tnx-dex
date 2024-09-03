import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import RedLockIcon from '../../../../assets/lock.png';
import UnLockIcon from '../../../../assets/LockSucess.svg';
import SearchIcon from '../../../../assets/search.png';
import DurationIcon from '../../../../assets/Duration.svg';
import SucessDepositIcon from '../../../../assets/gradient-party-poper.svg';
import LockIcon from '../../../../assets/Lock1.svg';
import Stepper from '../../../common/Stepper';
import React, { useState } from 'react';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { testErc20Abi } from './../../../../constants/abis/testErc20';
import { useTokenAllowance } from '../../../../hooks/useTokenAllowance';
import { ethers } from 'ethers';
import { GlobalButton } from '../../../common/index';
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
  const [isVisibleSlippage, setVisibleSlippage] = useState(false);
  const [isVisibleDeadline, setVisibleDealine] = useState(false);
  const getParam = useQueryParams();
  const Navigate = useNavigate();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const routerAddress = contractAddress.Router;
  const { deadLineValue } = useLiquidityStore();
  const { selectedTolerance } = useRootStore();
  const { approveAllowance: approveAllowance1 } = useTokenAllowance(
    selectedToken1!.address,
    testErc20Abi
  );

  const { approveAllowance: approveAllowance2 } = useTokenAllowance(
    selectedToken2!.address,
    testErc20Abi
  );

  const handleAllowToken1 = async () => {
    try {
      const amount1InWei =
        amount1 &&
        ethers.parseUnits(amount1.toString(), selectedToken1?.decimals);
      if (amount1InWei && selectedToken1?.address) {
        if (selectedToken1?.symbol === 'WETH') {
          setIsToken1Allowed(true);
        } else {
          await approveAllowance1(routerAddress, amount1InWei.toString());
          setIsToken1Allowed(true);
        }
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const handleAllowToken2 = async () => {
    try {
      const amount2InWei =
        amount2 &&
        ethers.parseUnits(amount2.toString(), selectedToken2?.decimals);
      if (amount2InWei && selectedToken2?.address) {
        if (selectedToken2?.symbol === 'WETH') {
          setIsToken1Allowed(true);
        } else {
          await approveAllowance2(routerAddress, amount2InWei.toString());
          setIsToken2Allowed(true);
        }
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const handleStakeDeposit = () => {
    Navigate('/stake');
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
  const { addLiquidity, addLiquidityETH } = useRouterContract();
  const { address } = useAccount();

  const handleDeposit = async () => {
    try {
      const amount1InWei = parseAmounts(amount1, selectedToken1?.decimals);
      const amount2InWei = parseAmounts(amount2, selectedToken2?.decimals);

      const minAmount1InWei = calculateMinAmount(
        amount1 ?? 0,
        selectedTolerance,
        selectedToken1?.decimals ?? 18
      );
      const minAmount2InWei = calculateMinAmount(
        amount2 ?? 0,
        selectedTolerance,
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
        if (selectedToken1?.symbol === 'WETH') {
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
        }
      }
    } catch (error) {
      console.error('Error adding liquidity:', error);
    }
  };

  const CreatepoolDepositeData: StepperDataProps[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions: {
        labels: 'Using your quote for new liquidity pool deposits',
      },
    },
    {
      step: 2,
      icon: PlusIcon,
      descriptions: {
        labels: '1.0 % slippage applied...',
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
        labels: '30 min transaction deadline applied...',
        adjust: 'Adjust',
        onClick: () => {
          handleAdjust('deadline');
        },
      },
    },
  ];

  if (!disabled1 && selectedToken1?.symbol !== 'WETH') {
    CreatepoolDepositeData.push({
      step: 3,
      icon: !isToken1Allowed ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels: isToken1Allowed
          ? 'Allowed the contracts to access ' + selectedToken1?.symbol
          : 'Allowance not granted for ' + selectedToken1?.symbol,
      },
      buttons: !isToken1Allowed
        ? {
            label: 'Allow ' + selectedToken1?.symbol,
            icon: LockIcon,
            onClick: handleAllowToken1,
            tooltip: 'Click to allow USDT transactions',
            disabled: disabled1,
          }
        : undefined,
    });
  }

  if (!disabled2 && selectedToken2?.symbol !== 'WETH') {
    CreatepoolDepositeData.push({
      step: 4,
      icon: !isToken2Allowed ? RedLockIcon : UnLockIcon,
      descriptions: {
        labels: isToken2Allowed
          ? 'Allowed the contracts to access ' + selectedToken2?.symbol
          : 'Allowance not granted for ' + selectedToken2?.symbol,
      },
      buttons: !isToken2Allowed
        ? {
            label: 'Allow ' + selectedToken2?.symbol,
            icon: LockIcon,
            onClick: handleAllowToken2,
            tooltip: 'Click to allow FTM transactions',
            disabled: disabled2,
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
  });

  return (
    <>
      <Stepper data={CreatepoolDepositeData} />
      {!isDeposited && isToken2Allowed && isToken2Allowed && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={() => {
            handleDeposit()
              .then(() => {
                <SuccessPopup message="Deposit Successfully" />;
              })
              .catch((error) => {
                console.error('Error adding liquidity:', error);
              });
          }}
        >
          Deposit
        </GlobalButton>
      )}

      {isDeposited && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleStakeDeposit}
        >
          Stake your Deposit{' '}
        </GlobalButton>
      )}

      {isVisibleSlippage && !isVisibleDeadline && (
        <PopupScreen isVisible={isVisibleSlippage} onClose={closeModal}>
          <PopupWrapper>
            <SlippageTolerance />
          </PopupWrapper>
        </PopupScreen>
      )}

      {!isVisibleSlippage && isVisibleDeadline && (
        <PopupScreen isVisible={isVisibleDeadline} onClose={closeModal}>
          <PopupWrapper>
            <TransactionDeadline />
          </PopupWrapper>
        </PopupScreen>
      )}
    </>
  );
};

export default Deposite;
