import styled from 'styled-components';
import TenexIcon from '../../../assets/Tenex.png';
import { DefaultTheme } from '../../../styles/Theme';
import TableContainer from './TableContainer';
import { GlobalButton } from '../../common';
import { useNavigate } from 'react-router-dom';
const H1 = styled.h4`
  font-size: 2.4em;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;

const Section = styled.section<{ theme: DefaultTheme }>`
  width: 100%;
`;

const Label = styled.label`
  font-family: Kanit;
  font-size: 1.125em;
  font-weight: 300;
  line-height: 1.75;
  text-align: left;
`;

const Img = styled.img`
  width: 1.125em;
  height: 1.125em;
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
  gap: 20px;
  color: #cccccc;
  padding-top: 10px;
  width: 50%;

  @media (max-width: 1250px) {
    width: 60%;
  }

  @media (max-width: 1100px) {
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    width: 100%;
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
const ButtonConatainer = styled.div`
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
    justify-content: space-between;
    height: auto;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 15px;
    height: 30px;
    width: 100%;
    height: 75px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    font-size: 0.875em;
  }
`;
const AmountWithImg = styled.div`
  display: flex;
  align-items: center;
`;
const Main = () => {
  const Navigate = useNavigate();
  function handleCreateLock() {
    Navigate('/governance/create');
  }
  const data = [
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
    {
      'ID + Status': '243687214231',
      'Locked Amount ': '8463',
      'Voting Power': '654.00',
      'Voting For': 'USDT-BTC',
      'Expiry Date': '20-08-2024',
      'Manage your Locks': ['Merge', 'Split'],
    },
  ];
  return (
    <Section>
      <HeroSection>
        <HeroSectionContent>
          <H1>Manage veTENEX</H1>
          <Label>Lock your tokens for veTENEX and recieive voting power</Label>
        </HeroSectionContent>

        <AsideSection>
          <ButtonConatainer>
            <GlobalButton
              width="150px"
              height="40px"
              onClick={handleCreateLock}
            >
              Create Lock
            </GlobalButton>
          </ButtonConatainer>
          <MoneyShowerSection>
            <MoneySection>
              <TitleStyle>Locked TENEX</TitleStyle>
              <AmountWithImg>
                4,376,987.82 <Img src={TenexIcon} />
              </AmountWithImg>
            </MoneySection>
            <MoneySection>
              <TitleStyle>Total Voting power</TitleStyle>
              <label>0.00</label>
            </MoneySection>
            <MoneySection>
              <TitleStyle>Total Value Locked</TitleStyle>
              <label>$0.00</label>
            </MoneySection>
          </MoneyShowerSection>
        </AsideSection>
      </HeroSection>

      <TableContainer data={data} />
    </Section>
  );
};

export default Main;
