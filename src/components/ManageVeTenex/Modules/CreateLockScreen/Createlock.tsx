import styled from 'styled-components';
import { Card } from '../../../common';
const CreateLockContainer = styled.div`
  width: 100%;
  padding: 40px;

  @media only screen and (max-width: 900px) {
    padding: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding: 5px;
  }
  display: flex;

  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 38px;
  font-weight: 300;
  line-height: 71.76px;
  text-align: left;
`;
const P = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 35.88px;
  text-align: left;
  color: rgba(204, 204, 204, 1);
`;

const MainContainer = styled.div`
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

const Createlock = () => {
  return (
    <CreateLockContainer>
      <header>
        <H1>Lock</H1>
        <P>Lock your tokens for veTENEX voting power</P>
      </header>

      <MainContainer>
        <FormContainer>
          <Card>abc</Card>
        </FormContainer>
      </MainContainer>
    </CreateLockContainer>
  );
};

export default Createlock;
