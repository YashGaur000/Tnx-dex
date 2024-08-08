import React from 'react';
import styled from 'styled-components';
import USDTFTM from '../../assets/USDT-FTM.png';
import Tenexlogo from '../../assets/Tenex.png';
import { GlobalButton } from '../common';

const Section = styled.section`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px; /* optional, for gutters */
`;

const Column60 = styled.div`
  padding: 0 15px; /* optional, for gutters */
  box-sizing: border-box;
  width: 60%;
`;

const Column40 = styled.div`
  padding: 0 15px; /* optional, for gutters */
  box-sizing: border-box;
  width: 40%;
`;

const IncentiveLeftBar = styled.div``;

const IncentiveLeftBarBox1 = styled.div`
  background: rgb(24, 38, 76);
  background: linear-gradient(
    180deg,
    rgba(24, 38, 76, 1) 0%,
    rgba(31, 48, 95, 1) 100%
  );
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
`;

const Img = styled.img`
  height: 40px;
`;

const Img2 = styled.img`
  height: 20px;
  width: 20px;
`;

const IncentiveLeftBarBox1info = styled.div`
  display: flex;
  flex-direction: initial;
`;

const IncentiveLeftBarBox1infoCol1 = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const IncentiveLeftBarBox1infoCol1StableRow = styled.div`
  display: flex;
`;

const UtmLabel = styled.label`
  font-family: Kanit;
  line-height: 1.75;
  text-align: left;
  font-size: 20px;
`;

const IncentiveLeftBarBox1infoCol1Stable = styled.div`
  margin-right: 20px;
  color: #16c062;
`;

const IncentiveLeftBarBox1infoCol1Count = styled.div`
  margin-right: 20px;
`;

const IncentiveLeftBarBox1infoCol1Icon = styled.div`
  margin-right: 20px;
`;

const IncentiveLeftBarBox1UTM = styled.div`
  margin-left: 24px;
`;

const IncentiveLeftBarBox1infoCol2 = styled.div`
  width: 50%;
  text-align: end;
`;

const IncentiveLeftBarBox1infoCol2Row1 = styled.article`
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
  color: #16c062;
`;

const IncentiveLeftBarBox1infoCol2Row2 = styled.span`
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
`;

const LiquidityBox = styled.div`
  margin-top: 40px;
`;

const LiquidityText1 = styled.article`
  font-size: 12px;
  font-family: Kanit;
  line-height: 1.75;
  color: #cccccc;
  margin-top: 12px;
`;

const LiquidityText2 = styled.article`
  font-size: 12px;
  font-family: Kanit;
  line-height: 1.75;
  color: #cccccc;
`;

const YourDepositsBox = styled.div`
  margin-top: 40px;
`;

const Box2Container = styled.div`
  display: flex;
`;

const Box2Title = styled.h2`
  color: #cccccc;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 300;
`;

const Box2TitleAvailable = styled.h2`
  color: #cccccc;
  font-size: 16px;
  font-weight: 300;
  padding-right: 10px;
`;

const Box2Value = styled.p`
  color: #ccc;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Box2ValueAvailable = styled.p`
  color: #ccc;
  font-size: 20px;
  font-weight: 300;
`;

const Box2ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Box2ProgressBar = styled.input`
  flex-grow: 1;
  width: 100%;
  background-color: #fff0;
  border: 1px solid #b8b8b8;
  border-radius: 16px;
  padding: 20px;
  margin-top: 10px;
`;

const Box2PercentageBar = styled.div`
  justify-content: end;
  display: flex;
`;

const Box2Percentage = styled.span`
  color: #cccccc;
  font-size: 14px;
  margin-left: 20px;
  font-weight: 300;
`;

const Box2DataPoint1 = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 20%;
`;

const Box2DataPoint1Tenex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 20%;
`;

const Box2DataPoint2 = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 30%;
`;

const Box2DataPoint3 = styled.div`
  text-align: right;
  margin-bottom: 10px;
  width: 50%;
`;

const Box2DataPoint4 = styled.div`
  margin-bottom: 10px;
  justify-content: end;
  width: 100%;
  display: flex;
  text-align: right;
  align-items: center;
`;

const Box2TokenName = styled.span`
  color: #cccccc;
  font-size: 16px;
  margin-left: 10px;
`;

const IncentivesBox2 = styled.h2`
  color: #eb5540;
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 40px;
`;

const IncentivesBox2Paragraph = styled.article`
  color: #fff;
  font-size: 16px;
  font-family: Kanit;
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 40px;
`;

const IncentiveSection: React.FC = () => {
  return (
    <Section>
      <Row>
        <Column60>
          <IncentiveLeftBar>
            <IncentiveLeftBarBox1>
              <IncentiveLeftBarBox1info>
                <IncentiveLeftBarBox1infoCol1>
                  <Img src={USDTFTM} />
                  <IncentiveLeftBarBox1UTM>
                    <UtmLabel>USDT-FTM</UtmLabel>
                    <IncentiveLeftBarBox1infoCol1StableRow>
                      <IncentiveLeftBarBox1infoCol1Stable>
                        Stable
                      </IncentiveLeftBarBox1infoCol1Stable>
                      <IncentiveLeftBarBox1infoCol1Count>
                        0.01%
                      </IncentiveLeftBarBox1infoCol1Count>
                      <IncentiveLeftBarBox1infoCol1Icon>
                        I
                      </IncentiveLeftBarBox1infoCol1Icon>
                    </IncentiveLeftBarBox1infoCol1StableRow>
                  </IncentiveLeftBarBox1UTM>
                </IncentiveLeftBarBox1infoCol1>
                <IncentiveLeftBarBox1infoCol2>
                  <IncentiveLeftBarBox1infoCol2Row1>
                    APR
                  </IncentiveLeftBarBox1infoCol2Row1>
                  <IncentiveLeftBarBox1infoCol2Row2>
                    226.18%
                  </IncentiveLeftBarBox1infoCol2Row2>
                </IncentiveLeftBarBox1infoCol2>
              </IncentiveLeftBarBox1info>
              {/* new row starts on same section */}
              <IncentiveLeftBarBox1info>
                <IncentiveLeftBarBox1infoCol1>
                  <LiquidityBox>
                    Liquidity
                    <LiquidityText1>1,003,212.5643 USDT</LiquidityText1>
                    <LiquidityText2>2,783,860.003 FTM</LiquidityText2>
                  </LiquidityBox>
                </IncentiveLeftBarBox1infoCol1>
                <IncentiveLeftBarBox1infoCol2>
                  <YourDepositsBox>
                    Your Deposits
                    <LiquidityText1>0.0 USDT</LiquidityText1>
                    <LiquidityText2>0.0 FTM</LiquidityText2>
                  </YourDepositsBox>
                </IncentiveLeftBarBox1infoCol2>
              </IncentiveLeftBarBox1info>
            </IncentiveLeftBarBox1>
            <IncentiveLeftBarBox1>
              <Box2Container>
                <Box2DataPoint1>
                  <Box2Title>APR</Box2Title>
                  <Box2Value>0.0%</Box2Value>
                </Box2DataPoint1>
                <Box2DataPoint2>
                  <Box2Title>Current Votes</Box2Title>
                  <Box2Value>0.0</Box2Value>
                </Box2DataPoint2>
                <Box2DataPoint3>
                  <Box2Title>Current Incentives</Box2Title>
                  <Box2Value>~$0.0</Box2Value>
                </Box2DataPoint3>
              </Box2Container>
              <Box2Container>
                <Box2DataPoint1Tenex>
                  <Img2 width="20px" height="20px" src={Tenexlogo} />
                  <Box2TokenName>TENEX</Box2TokenName>
                </Box2DataPoint1Tenex>
                <Box2DataPoint2></Box2DataPoint2>
                <Box2DataPoint4>
                  <Box2TitleAvailable>Available: </Box2TitleAvailable>
                  <Box2ValueAvailable>0.000</Box2ValueAvailable>
                </Box2DataPoint4>
              </Box2Container>
              <Box2ProgressContainer>
                <Box2ProgressBar />
              </Box2ProgressContainer>
              <Box2PercentageBar>
                <Box2Percentage>0%</Box2Percentage>
                <Box2Percentage>25%</Box2Percentage>
                <Box2Percentage>50%</Box2Percentage>
                <Box2Percentage>75%</Box2Percentage>
                <Box2Percentage>MAX%</Box2Percentage>
              </Box2PercentageBar>
            </IncentiveLeftBarBox1>
          </IncentiveLeftBar>
        </Column60>
        <Column40>
          <IncentiveLeftBarBox1>
            <IncentivesBox2>Incentivize</IncentivesBox2>
            <IncentivesBox2Paragraph>
              Incentives are usually provided by the protocols. By continuing
              with the next steps you acknowledge that you understand the
              mechanics of the protocol and that after depositing any rewards as
              incentives you won&apos;t be able to withdraw them.
            </IncentivesBox2Paragraph>
            <IncentivesBox2Paragraph>
              By providing an incentive, you may draw more liquidity providers.
              Votes are a decisive factor on how much emissions a liquidity pool
              will get next epoch. The more emissions are flowing to a liquidity
              pool, the more rewards for those who provide liquidity for the
              pool.
            </IncentivesBox2Paragraph>
            <GlobalButton padding="20px">Continue</GlobalButton>
          </IncentiveLeftBarBox1>
        </Column40>
      </Row>
    </Section>
  );
};

export default IncentiveSection;
