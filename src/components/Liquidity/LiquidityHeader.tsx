import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';
// import { Link } from 'react-router-dom';
// import SubTabs from '../SubTabsComponent';
// import { SlippageWrapper } from '../Swap/Sidebar';
import { GradientText } from '../Homepage/styles/HeroSection.style';
import Questionmark from '../../assets/question-mark.png';

const LiquidityBoxWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
  margin-left: 5 0px;

  @media (max-width: 900px) {
    width: 70%;
    margin-top: 20px;
  }
`;

const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 48px;
  margin-bottom: 50px;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Description = styled.p<{ fontSize: number; theme: DefaultTheme }>`
  margin-bottom: 10px;
  margin-right: 100px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;

const Button = styled.button<{ theme: DefaultTheme }>`
  padding: 15px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  cursor: pointer;

  margin-left: 54%;
  margin-right: 15%;
  margin-bottom: 1%;
  margin-top: 10%;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const LiquidityContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  width: 100%;
`;

const LiquidityDescription = styled.div<{ theme: DefaultTheme }>`
  display: flow;
  float: left;
  width: 65%;
`;

const Descriptions = styled.p<{ theme: DefaultTheme }>`
  display: flex;
  direction: flex-column;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-top: 50px;
`;
//font-size: ${({ fontSize }) => fontSize}px;
const LiquidityCreatePool = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  margin-left: 10%;
  top: -60px;
`;

const PoolInfo = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 22px;
  align-items: flex-start;
  padding: 10px;
  margin-right: 90px;
  margin-left: -100px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
`;

const StatBox = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 90px;
  border-radius: 16px;
  padding: 5px 10px;
  text-align: left;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
 

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
`;

const StatTitle = styled.span<{ theme: DefaultTheme }>`
  text-align: left;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatValue = styled.span<{ theme: DefaultTheme }>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

// const LiquidityPoolsContainer =  styled.div<{ fontSize: number; theme: DefaultTheme}>`
//   display: flex;
//   font-size: ${({fontSize}) => fontSize}px;
//   // margin-bottom: 90px;
//   margin-top: -70px;
// `;

export const AllPoolsTabs = styled.button<{
  isconnected?: string;
  theme: DefaultTheme;
}>`
  padding: 3px 17px 1px 15px;
  display: flex;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;

  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;

const Tooltip = styled.img`
  width: 21.19px;
  height: 21.19px;
  margin-left: 12px;
  margin-bottom: -1px;
`;

// const InputWrapper = styled.div<{ theme: DefaultTheme }>`
//   border: 1px solid ${({ theme }) => theme.colors.greyDark};
//   border-radius: 10px;
// `;

// const LiquidityPoolsText = styled.div<{ theme: DefaultTheme}>`
//   display: flex;
//   width: 100%;
// `;

// const LiquidityPoolListContainer = styled.div<{ theme: DefaultTheme}>`
//   display: flex;
//   width: 100%;
//   height: 900px;
//   border-radius: 16px;
//   padding: 5px 10px;
//   text-align: left;
//   background: ${({ theme }) => theme.colors.card};
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 50px;

//   @media (max-width: 1024px) {
//     width: 350px;
//   }

//   @media (max-width: 900px) {
//     margin-top: 10px;
//     grid-template-columns: none;
//     justify-content: center;
// `;
// const SearchBar = () => {
//   const handleSearch = (event) => {
//     const query = event.target.value;
//     // Add your search logic here
//     console.log('Searching for:', query);
//   };

//   const handleDropdownClick = () => {
//     // Add your dropdown logic here
//     console.log('Dropdown clicked');
//   };

const LiquidityHeader: React.FC = () => {
  // const [showCircleQuestionInfo, setShowCircleQuestionInfo] = useState(false);
  // const [showTooltip, setShowTooltip] = useState(false);

  // const handleMouseEnter = () => setShowCircleQuestionInfo(true);
  // const handleMouseLeave = () => setShowCircleQuestionInfo(false);

  return (
    <LiquidityBoxWrapper>
      <Title>Liquidity</Title>
      <LiquidityContainer>
        <LiquidityDescription>
          <Description fontSize={24}>
            Liquidity Providers (LPs) make low-slippage swaps possible.
            <Tooltip src={Questionmark} alt="QuestionMark Logo" />
            <br />
            Deposit and Stake liquidity to earn TENEX
            <Descriptions>
              There are currently 100 tokens listed. See all tokens or request a
              new token listing
            </Descriptions>
          </Description>
        </LiquidityDescription>
        <LiquidityCreatePool>
          <Button>Create Pools</Button>
          <PoolInfo>
            <StatBox>
              <StatTitle>
                <GradientText>
                  TVL
                  <br />
                </GradientText>
              </StatTitle>
              <StatValue>$1,547,658,000.28</StatValue>
            </StatBox>
            <StatBox>
              <StatTitle>
                <GradientText>
                  Fees
                  <br />
                </GradientText>
              </StatTitle>
              <StatValue>$1,547,658,000.28</StatValue>
            </StatBox>
            <StatBox>
              <StatTitle>
                <GradientText>
                  24H Volume
                  <br />
                </GradientText>
              </StatTitle>
              <StatValue>$2,547,658,070.40</StatValue>
            </StatBox>
          </PoolInfo>
        </LiquidityCreatePool>
      </LiquidityContainer>
    </LiquidityBoxWrapper>
  );
};

export default LiquidityHeader;
