import { GlobalButton } from '../../common';
import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';

import SearchIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import { useState } from 'react';
import { parseAmounts } from '../../../utils/transaction/parseAmounts';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';
import { Address } from 'viem';
import { useGaugeContract } from '../../../hooks/useGaugeContract';
import { LoadingSpinner } from '../../common/Loader';
import { useNavigate } from 'react-router-dom';
const UnStakeStepper = ({
  selectUnsatkeValue,
  gauge,
  gaugeBalance,
  lp,
}: {
  selectUnsatkeValue: number;
  gauge: Address;
  gaugeBalance: string;
  lp: Address;
}) => {
  const [isUnstaked, setIsUnstaked] = useState(false);
  const { transactionStatus, setTransactionStatus } = useRootStore();
  const { withdraw } = useGaugeContract(gauge);
  const navigate = useNavigate();

  const UnStakeStepperData = [
    {
      step: 1,
      icon: DepositedIcon,
      descriptions: {
        labels: 'Found the staked deposit',
      },
    },

    {
      step: 2,
      icon: SearchIcon,
      descriptions: {
        labels: 'Waiting for next actions...',
      },
      actionCompleted: !isUnstaked,
    },
  ];

  const handleUnstake = async () => {
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);
      const unstakedAmount = (Number(gaugeBalance) * selectUnsatkeValue) / 100;
      const unstakeAmountInWei = parseAmounts(unstakedAmount, 18) ?? BigInt(0);
      const result = await withdraw(unstakeAmountInWei);

      if (result) {
        setTransactionStatus(TransactionStatus.DONE);
        setIsUnstaked(true);
      } else {
        setTimeout(
          () => setTransactionStatus(TransactionStatus.IDEAL),
          TRANSACTION_DELAY
        );
      }
    } catch (error) {
      console.error('Error during fee claim transaction:', error);
    }
  };

  const handleWithdraw = (lp: Address) => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('pool', lp);

    navigate({
      pathname: '/withdraw',
      search: `?${queryParams.toString()}`,
    });
  };

  return (
    <>
      <LiquidityHeaderTitle fontsize={24}>Unstaking</LiquidityHeaderTitle>
      <Stepper data={UnStakeStepperData}></Stepper>

      {!isUnstaked ? (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleUnstake}
          disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
        >
          {transactionStatus === TransactionStatus.IN_PROGRESS ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center', // Center items horizontally
                alignItems: 'center', // Center items vertically
                gap: '15px',
              }}
            >
              <LoadingSpinner width="10px" height="10px" />
              <p>Unstaking</p>
            </div>
          ) : (
            <p>Unstake</p>
          )}
        </GlobalButton>
      ) : (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={() => handleWithdraw(lp)}
        >
          Withdraw
        </GlobalButton>
      )}
    </>
  );
};

export default UnStakeStepper;
