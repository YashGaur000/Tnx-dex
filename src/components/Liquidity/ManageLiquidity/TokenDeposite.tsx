import styled from 'styled-components';
import GroupTokenIcon from '../../../assets/Groupcoin.png';
import InformIcon from '../../../assets/information.png';
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  border-radius: 15px;
  padding: 10px;

  height: auto;
  gap: 30px;
  padding: 40px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TokenWithImageContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;
`;

const ImgTokenIcon = styled.img`
  width: 60px;
  height: 35px;
`;
const ImgInformIcon = styled.img`
  height: 15px;
  width: 15px;
`;
const TokenStatus = styled.div`
  display: flex;

  gap: 10px;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 300;
  line-height: 17.94px;
  text-align: left;
  color: #cccccc;
`;
const TokenDescription = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
`;

const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
  color: #ffffff;
`;

const LiquidityStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;
const DepositeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const H2 = styled.h2`
  font-family: Kanit;
  font-size: 20px;
  font-weight: 300;
  line-height: 29.9px;
  text-align: left;
  color: #ffffff;
`;
const Label = styled.label`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
const Label1 = styled.label`
  font-family: Kanit;
  font-size: 12px;
  font-weight: 300;
  line-height: 17.94px;
  text-align: left;
  color: #cccccc;
`;

const H3 = styled.h3`
  font-family: Kanit;
  font-size: 16px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
  color: #ffffff;
`;
const TokenDeposite = () => {
  return (
    <Section>
      <Container>
        <TokenWithImageContainer>
          <ImgTokenIcon src={GroupTokenIcon} />

          <TokenDescription>
            <H2>USDT-FTM</H2>
            <TokenStatus>
              <Label>stable</Label>
              <label>0.01%</label>
              <ImgInformIcon src={InformIcon} />
            </TokenStatus>
          </TokenDescription>
        </TokenWithImageContainer>
        <TokenContainer>
          <Label>APR</Label>
          <p>226.18%</p>
        </TokenContainer>
      </Container>
      <Container>
        <LiquidityStyleContainer>
          <H3>Liquidity</H3>
          <Label1>
            1,003,212.5643 <span>USDT</span>
          </Label1>
          <Label1>
            2,783,860.003 <span>FTM</span>
          </Label1>
        </LiquidityStyleContainer>
        <DepositeStyle>
          <H3>Your Deposits</H3>
          <Label1>0.0 USDT</Label1>
          <Label1>0.0 FTM</Label1>
        </DepositeStyle>
      </Container>
    </Section>
  );
};

export default TokenDeposite;
