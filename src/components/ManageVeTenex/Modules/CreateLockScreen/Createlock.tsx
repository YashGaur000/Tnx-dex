import styled from 'styled-components';

import UsdtIcon from '../../../../assets/usdt.png';
import InformIcon from '../../../../assets/information.png';
import {
  DescriptonTitle,
  LockScreenContainer,
  HeaderTitle,
  Cardstyle,
} from '../../Styles/ManageVetenex.style';
import {
  Slider,
  SliderContainer,
} from '../../../Swap/styles/TransactionDeadline.style';
import {
  LockTitle,
  MainContainer,
  LockLoaderContainer,
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
  LockScreenInstruction,
  InformImg,
} from '../../Styles/CreateLock.style';
import LockDeposite from './LockDeposite';

const FormContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;

  gap: 15px;

  @media only screen and (max-width: 1100px) {
    width: 50%;
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
    <LockScreenContainer>
      <header>
        <HeaderTitle fontSize={36}>Lock</HeaderTitle>
        <DescriptonTitle fontSize={16}>
          Lock your tokens for veTENEX voting power
        </DescriptonTitle>
      </header>

      <MainContainer>
        <FormContainer>
          <Cardstyle>
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
            <LockTitle fontSize={17}>
              Locking your TENEX tokens for veTENEX voting power
            </LockTitle>
            <LockLoaderContainer>
              <LoaderStatus fontSize={14}>7days</LoaderStatus>
              <LoaderStyle>
                <SliderContainer>
                  <Slider type="range" min="0" max="60" />
                </SliderContainer>
              </LoaderStyle>
              <SliderDeadlineStyle fontSize={10}>
                <label>7days</label>
                <label>6 month</label>
                <label>1 years</label>
                <label>2 years</label>
                <label>3 years</label>
                <label>3 years</label>
              </SliderDeadlineStyle>
            </LockLoaderContainer>
          </Cardstyle>
          <Cardstyle>
            <LockScreenInstruction>
              <InformImg src={InformIcon} />
              <p>
                Locking will give you an NFT, referred to as a veNFT. You can
                increase the Lock amount or extend the Lock time at any point
                after.
              </p>
            </LockScreenInstruction>
          </Cardstyle>
        </FormContainer>
        <LockDeposite />
      </MainContainer>
    </LockScreenContainer>
  );
};

export default Createlock;
