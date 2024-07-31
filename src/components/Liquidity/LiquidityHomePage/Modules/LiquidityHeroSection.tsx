import styled from 'styled-components';
import QuestionIcon from '../../../../assets/questionMark.png';
import { GlobalButton } from '../../../common';
import { useNavigate } from 'react-router-dom';
const Label = styled.label`
  font-family: Kanit;
  font-size: 1.125em;
  font-weight: 300;
  line-height: 1.75;
  text-align: left;
`;
const P = styled.p`
  font-size: 0.75em;
  font-weight: 300;
  line-height: 1.75;
  text-align: left;
  color: rgba(204, 204, 204, 1);
`;
const LabelWithHover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
`;

const Img = styled.img`
  width: 1em;
  height: 1em;
  margin-left: 20px;
`;

const TitleStyle = styled.label`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.0625em;
`;

const HeroSection = styled.main`
  display: flex;
  height: auto;
  margin-top: 20px;
  width: 100%;

  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const HeroSectionContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 45px;
  color: #cccccc;
  padding-top: 15px;
  width: 50%;

  @media (max-width: 1250px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 18px;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
const AsideSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 50%;

  @media (max-width: 1250px) {
    width: 40%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 30px;
    flex-direction: column-reverse;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const MoneyShowerSection = styled.div`
  display: flex;

  gap: 20px;
  color: #cccccc;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 1250px) {
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 5px;
  }
`;
const MoneySection = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  height: 80px;
  justify-content: center;
  padding: 15px;
  gap: 6px;

  border-radius: 10px;
  font-size: 1em;
  font-weight: 300;

  @media (max-width: 1250px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;
    height: 35px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    padding: 0px 15px;

    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    font-size: 0.875em;
  }
  @media (max-width: 550px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;
    height: 35px;
    width: 100%;
  }
`;
const LiquidityHeroSection = () => {
  const Navigate = useNavigate();

  function handleCreatePool() {
    Navigate('/liquidity/create');
  }
  return (
    <HeroSection>
      <HeroSectionContent>
        <div>
          <LabelWithHover>
            <Label>
              Liquidity Providers (LPs) make low-slippage swaps possible.
              <Img src={QuestionIcon} />
            </Label>
            <Label>Deposit and Stake liquidity to earn TENEX</Label>
          </LabelWithHover>
        </div>
        <P>
          There are currently 100 tokens listed. <u>See all tokens</u> or{' '}
          <u>request a new token listing.</u>
        </P>
      </HeroSectionContent>
      <AsideSection>
        <ButtonContainer>
          <GlobalButton width="130px" height="40px" onClick={handleCreatePool}>
            Create Pool
          </GlobalButton>
        </ButtonContainer>
        <MoneyShowerSection>
          <MoneySection>
            <TitleStyle>TVL</TitleStyle>
            <label>$1,547,658,000.28</label>
          </MoneySection>
          <MoneySection>
            <TitleStyle>Fees</TitleStyle>
            <label>$1,547,658,000.28</label>
          </MoneySection>
          <MoneySection>
            <TitleStyle>24H Volume</TitleStyle>
            <label>$1,547,658,000.28</label>
          </MoneySection>
        </MoneyShowerSection>
      </AsideSection>
    </HeroSection>
  );
};

export default LiquidityHeroSection;
