import styled from 'styled-components';
import CreateNewLiquidity from './CreateNewLiquidity';
import { DefaultTheme } from '../../styles/Theme';
import LiquidityForm from './LiquidityForm';
import DepositeComponent from './DepositeComponent';

const ManagePoolContainer = styled.section<{ theme: DefaultTheme }>`
  width: 100%;
`;
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

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: 40px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const FormContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  border: 2px solid;
  gap: 15px;

  @media only screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
  }
`;

const ManagePool = () => {
  return (
    <ManagePoolContainer>
      <header>
        <H1>Manage Pool</H1>
        <P>Mange your position</P>
      </header>

      <MainContainer>
        <FormContainer>
          <CreateNewLiquidity />
          <LiquidityForm />
        </FormContainer>

        <DepositeComponent />
      </MainContainer>
    </ManagePoolContainer>
  );
};

export default ManagePool;
