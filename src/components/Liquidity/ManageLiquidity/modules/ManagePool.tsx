import styled from 'styled-components';

import LiquidityForm from './LiquidityForm';
import DepositeComponent from './DepositeComponent';
import { useState } from 'react';
import TokenDeposite from './TokenDeposite';

const H1 = styled.h4`
  font-size: 38px;
  font-weight: 300;
  line-height: 71.76px;
  text-align: left;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 35.88px;
  text-align: left;
  color: rgba(204, 204, 204, 1);
`;

const ManageLiquidityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  margin-top: 40px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;

    gap: 15px;
  }
`;

const FormContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  gap: 15px;

  @media only screen and (max-width: 1100px) {
    width: 45%;
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ManagePool = () => {
  const [tokenValue, setTokenValue] = useState<number>(0);

  const handleTokenValueChange = (value: number) => {
    setTokenValue(value);
  };
  return (
    <>
      <header>
        <H1>Manage Pool</H1>
        <P>Manage your position</P>
      </header>

      <ManageLiquidityContainer>
        <FormContainer>
          <TokenDeposite />
          <LiquidityForm
            tokenValue={tokenValue}
            onTokenValueChange={handleTokenValueChange}
          />
        </FormContainer>

        <DepositeComponent tokenValue={tokenValue} />
      </ManageLiquidityContainer>
    </>
  );
};

export default ManagePool;
