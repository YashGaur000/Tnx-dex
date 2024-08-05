import styled from 'styled-components';
import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import UnLockIcon from '../../../../assets/unlock.png';
import SearchIcon from '../../../../assets/search.png';
import LockIcon from '../../../../assets/lock.png';
import { DefaultTheme } from '../../../../styles/Theme';

const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 15px;
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
`;

const ContentWithButton = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-item: center;
  margin-bottom: 20px;
  gap: 10px;
  color: #cccccc;
  font-family: Kanit;
  font-size: 15px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
`;

const Button = styled.button<{ theme: DefaultTheme }>`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  margin-top: 4px;
  align-item: center;
  justify-content: center;
  border-radius: 50%;

  overflow: hidden;
`;
const ImgIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const Span = styled.span`
  margin-top: auto;
  font-size: 15px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
  margin-right: 10px;
`;
const Step = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const VerticalStep = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Circle = styled.div`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  display: flex;
  visibility: visible;
  justify-content: center;

  background-color: rgb(1, 6, 8);

  border: 0px;
`;

const Line = styled.div`
  height: 100%;

  border-left: 2px dotted rgb(64, 120, 146);
`;
const Content = styled.div`
  margin-left: 20px;
  display: inline-block;
  margin-bottom: 25px;
  color: #cccccc;
  font-family: Kanit;
  font-size: 15px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
`;

const Deposite = () => {
  return (
    <StepperContainer>
      <Step>
        <VerticalStep>
          <Circle>
            <ImageContainer>
              <Img src={CalIcon} alt="logo" />
            </ImageContainer>
          </Circle>
          <Line></Line>
        </VerticalStep>

        <Content>
          <label>First deposit into stable pool use 11 rate</label>
        </Content>
      </Step>

      <Step>
        <VerticalStep>
          <Circle>
            <ImageContainer>
              <Img src={PlusIcon} alt="logo" />
            </ImageContainer>
          </Circle>
          <Line></Line>
        </VerticalStep>

        <Content>
          <label> 10% slippage applied...</label>
        </Content>
      </Step>

      <Step>
        <VerticalStep>
          <Circle>
            <ImageContainer>
              <Img src={UnLockIcon} alt="logo" />
            </ImageContainer>
          </Circle>
          <Line></Line>
        </VerticalStep>

        <ContentWithButton>
          <label>Allowance not granted for USDT</label>
          <Button>
            <Span>Allow USDT</Span>
            <ImgIcon src={LockIcon} />
          </Button>
        </ContentWithButton>
      </Step>

      <Step>
        <VerticalStep>
          <Circle>
            <ImageContainer>
              <Img src={UnLockIcon} alt="logo" />
            </ImageContainer>
          </Circle>
          <Line></Line>
        </VerticalStep>

        <ContentWithButton>
          <label>Allowance not granted for USDT</label>
          <Button>
            <Span>Allow FTM</Span>
            <ImgIcon src={LockIcon} />
          </Button>
        </ContentWithButton>
      </Step>

      <Step>
        <VerticalStep>
          <Circle>
            <ImageContainer>
              <Img src={SearchIcon} alt="logo" />
            </ImageContainer>
          </Circle>
        </VerticalStep>

        <Content>
          <label>Waiting for next actions...</label>
        </Content>
      </Step>
    </StepperContainer>
  );
};

export default Deposite;
