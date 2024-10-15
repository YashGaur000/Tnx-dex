import { GlobalButton } from '../../common';
import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';

import SearchIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import { useState } from 'react';
import {
  TRANSACTION_DELAY,
  TransactionStatus,
} from '../../../types/Transaction';
import { useRootStore } from '../../../store/root';
import { Address } from 'viem';
import { useGaugeContract } from '../../../hooks/useGaugeContract';
import { LoadingSpinner } from '../../common/Loader';
import { useNavigate } from 'react-router-dom';
import SuccessPopup from '../../common/SucessPopup';
import { ButtonsSideBySide } from '../../common/Buttons/GlobalButton';
import { GradientButton } from '../../common/index';

const UnStakeStepper = ({
  selectUnsatkeValue,
  gauge,
  lp,
}: {
  selectUnsatkeValue: number;
  gauge: Address;
  lp: Address;
}) => {
  const [isUnstaked, setIsUnstaked] = useState(false);
  const { transactionStatus, setTransactionStatus } = useRootStore();
  const { withdraw, balanceOf } = useGaugeContract(gauge);
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
      const gaugeBalance = await balanceOf();
      let unstakedAmount: bigint = gaugeBalance
        ? BigInt((Number(gaugeBalance?.toString()) * selectUnsatkeValue) / 100)
        : 0n;

      if (selectUnsatkeValue === 100 && gaugeBalance) {
        unstakedAmount = gaugeBalance;
      }
      const result = await withdraw(unstakedAmount);

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

  const handlewithdrawLater = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <LiquidityHeaderTitle fontSize={24}>Unstaking</LiquidityHeaderTitle>
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
        <></>
        // <GlobalButton
        //   width="100%"
        //   height="48px"
        //   margin="0px"
        //   onClick={() => handleWithdraw(lp)}
        // >
        //   Withdraw Deposit
        // </GlobalButton>
      )}
      {isUnstaked && <SuccessPopup message="Unstaked Successfully" />}

      {isUnstaked && (
        <ButtonsSideBySide>
          <ButtonsSideBySide onClick={handlewithdrawLater}>
            <GradientButton width="45%" height="48px" fontSize="16px">
              Withdraw later{' '}
            </GradientButton>
          </ButtonsSideBySide>
          <GlobalButton
            width="45%"
            height="48px"
            margin="20px"
            onClick={() => handleWithdraw(lp)}
          >
            Withdraw now{' '}
          </GlobalButton>
        </ButtonsSideBySide>
      )}
    </>
  );
};

export default UnStakeStepper;
