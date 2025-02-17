// import { GlobalButton } from "../../common"
import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';
import SearchIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import PlusMinusIcon from '../../../assets/plusminus.png';
import RedLockIcon from '../../../assets/lock.png';
import Lock1Icon from '../../../assets/Lock1.svg';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import poolAbi from '../../../constants/artifacts/contracts/Pool.json';
import { useAccount } from '../../../hooks/useAccount';
import contractAddress from '../../../constants/contract-address/address';
import { useState } from 'react';
import { Address } from 'viem';
import { usePoolContract } from '../../../hooks/usePoolContract';
import { ethers } from 'ethers';
import { useLiquidityPoolDataById } from '../../../hooks/useLiquidityPoolDataById';
import { GlobalButton } from '../../common/index';
import { useRootStore } from '../../../store/root';
import {
  TransactionStatus,
  TRANSACTION_DELAY,
} from '../../../types/Transaction';
import { useRouterContract } from '../../../hooks/useRouterContract';
import { getDeadline } from '../../../utils/transaction/getDeadline';
import { LoadingSpinner } from '../../common/Loader';
interface WithdrawStepperProps {
  poolId: string;
  withdrawPercentage: string;
  tokenA: string;
  tokenB: string;
}
const WithdrawStepper = ({
  poolId,
  withdrawPercentage,
  tokenA,
  tokenB,
}: WithdrawStepperProps) => {
  const { address } = useAccount();
  const [isAllowingToken, setIsAllowingToken] = useState(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [liquidity, setLiquidity] = useState('0');
  const { transactionStatus, setTransactionStatus } = useRootStore();

  const { data: poolData } = useLiquidityPoolDataById(poolId);

  const { approveAllowance } = useTokenAllowance(
    poolId as Address,
    poolAbi.abi
  );

  const { balanceOf } = usePoolContract(poolId);

  const { removeLiquidity, quoteRemoveLiquidity } = useRouterContract();

  const handleAllowance = async () => {
    setIsAllowingToken(true);
    const balance = await balanceOf();
    if (balance) {
      const amount =
        (Number(balance.etherBalance) * Number(withdrawPercentage)) / 100;
      const amountInWei = ethers.parseUnits(
        amount.toFixed(balance.decimals).toString(),
        balance.decimals
      );
      setLiquidity(amountInWei.toString());
      const result = await approveAllowance(
        contractAddress.Router,
        amountInWei.toString()
      );
      setIsTokenAllowed(result ? true : false);
    }
  };

  const handleWithdrawDeposit = async () => {
    const deadline = getDeadline(30);

    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      if (address) {
        const quote = await quoteRemoveLiquidity(
          tokenA as Address,
          tokenB as Address,
          poolData[0].isStable,
          contractAddress.PoolFactory,
          liquidity
        );

        if (quote) {
          const result = await removeLiquidity(
            tokenA as Address,
            tokenB as Address,
            poolData[0].isStable,
            liquidity,
            quote?.amountA,
            quote?.amountB,
            address,
            deadline
          );

          if (result) {
            setTransactionStatus(TransactionStatus.DONE);
            setIsWithdraw(true);
          } else {
            setTimeout(
              () => setTransactionStatus(TransactionStatus.IDEAL),
              TRANSACTION_DELAY
            );
            setIsWithdraw(false);
          }
        }
      }
    } catch (error) {
      console.error('Error withdrawing liquidity:', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    }
  };

  const WithdrawStepperData = [
    {
      step: 1,
      icon: DepositedIcon,
      descriptions: {
        labels: 'Found the staked deposit',
      },
    },

    {
      step: 2,
      icon: PlusMinusIcon,
      descriptions: {
        labels: '1.0% slippage applied...  ',
        adjust: 'Adjust',
      },
    },

    {
      step: 3,
      icon: RedLockIcon,
      descriptions: {
        labels: !isTokenAllowed
          ? `Allowance not granted for ${poolData[0]?.name}`
          : `Allowance  granted for ${poolData[0]?.name}`,
      },
      buttons: !isTokenAllowed
        ? {
            label: `Allow ${poolData[0]?.name}`,
            icon: Lock1Icon,
            onClick: handleAllowance,
            inProgress: isAllowingToken,
          }
        : undefined,
    },

    {
      step: 4,
      icon: !isWithdraw ? SearchIcon : SucessDepositIcon,
      descriptions: {
        labels: isWithdraw
          ? `Withdraw successfully`
          : 'Waiting for next actions...',
      },
      actionCompleted: !isWithdraw,
    },
  ];
  return (
    <>
      <LiquidityHeaderTitle fontsize={24}>
        Withdraw Liquidity
      </LiquidityHeaderTitle>
      <Stepper data={WithdrawStepperData}></Stepper>

      {/* Todo: make dynmaic, when allow token then after Withdraw Liquidity active  */}
      {!isWithdraw && isTokenAllowed && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleWithdrawDeposit}
          disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
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
              <p>Withdrawing Liquidity</p>
            </div>
          ) : (
            <p> Withdraw Liquidity</p>
          )}
        </GlobalButton>
      )}
    </>
  );
};

export default WithdrawStepper;
