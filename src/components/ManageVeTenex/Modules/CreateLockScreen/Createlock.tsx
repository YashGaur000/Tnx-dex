import styled from 'styled-components';
import { Card } from '../../../common';
import UsdtIcon from '../../../../assets/usdt.png';
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
const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 130px;
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Kanit;
  font-size: 15px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
`;

const Progress = styled.span`
  display: flex;
  justify-content: end;
  padding-right: 5px;
  gap: 10px;
  font-size: 12px;
  color: silver;
`;

const ImageWithTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
  // Use InputBoxProps for typing
  width: 99%;
  height: 47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #b8b8b899;
  color: white;
  padding-left: 20px;
  font-weight: 300;
`;
const Img = styled.img`
  width: 17px;
  height: 17px;
  margin: auto;
  margin-right: 7px;
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
          <Card>
            <FormFieldContainer>
              <Title>
                <ImageWithTitle>
                  <Img src={UsdtIcon} alt="USDT logo" />
                  <label>USDT</label>
                </ImageWithTitle>
                <label>Available 0000</label>
              </Title>
              <div>
                <InputBox type="text" name="usdt" />
              </div>
              <Progress>
                <label>0%</label>
                <label>25%</label>
                <label>50%</label>
                <label>75%</label>
                <label>MAX</label>
              </Progress>
            </FormFieldContainer>
            <label> Locking your TENEX tokens for veTENEX voting power</label>
          </Card>
        </FormContainer>
      </MainContainer>
    </CreateLockContainer>
  );
};

export default Createlock;
