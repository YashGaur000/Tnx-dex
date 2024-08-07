import React from 'react';

import Stepper from '../../../common/Stepper';

interface Data {
  step: number;
  descriptions: string[];
}

const DepositeInstruction: React.FC = () => {
  const data: Data[] = [
    {
      step: 1,
      descriptions: [
        "You are depositing liquidity into a Basic pool. Also known as the constant product pool or AMM, the liquidity in these pools is added over the full price range '(0 to ∞)' and requires little to no maintenance.",
        'The pool liquidity is kept in balance using the formula x*y + y³x ≥ k.',
      ],
    },
    {
      step: 2,
      descriptions: [
        'Fill in the deposit amounts. We calculate the deposit amounts to match the liquidity reserves in the pool. Pools without liquidity will use your deposit for the initial pool price.',
      ],
    },
    {
      step: 3,
      descriptions: ['After you deposit, you can stake the liquidity.'],
    },
  ];

  return (
    <>
      <Stepper data={data} />
    </>
  );
};

export default DepositeInstruction;
