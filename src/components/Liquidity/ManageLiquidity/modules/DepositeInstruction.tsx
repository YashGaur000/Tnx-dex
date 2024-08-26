import React from 'react';

import Stepper from '../../../common/Stepper';
import { StepperDataProps } from '../../../../types/Stepper';

const DepositeInstruction: React.FC = () => {
  const DepositeInstData: StepperDataProps[] = [
    {
      step: 1,
      descriptions: {
        labels: [
          'You are depositing liquidity into a Basic pool. Also known as the constant product pool or AMM, the liquidity in these pools is added over the full price range (0 to ∞) and requires little to no maintenance.',
          'The pool liquidity is kept in balance using the formula x³y + y³x ≥ k',
        ],
      },
    },
    {
      step: 2,
      descriptions: {
        labels: [
          'Fill in the deposit amounts. We calculate the deposit amounts to match the liquidity reserves in the pool. Pools without liquidity will use your deposit for the initial pool price.',
        ],
      },
    },
    {
      step: 3,
      descriptions: {
        labels: ['After you deposit, you can stake the liquidity.'],
      },
    },
  ];

  return (
    <>
      <Stepper data={DepositeInstData} />
    </>
  );
};

export default DepositeInstruction;
