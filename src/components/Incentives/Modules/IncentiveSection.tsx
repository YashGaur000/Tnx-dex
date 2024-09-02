import React, { useState } from 'react';
import USDTFTM from '../../../assets/USDT-FTM.png';
import USDTFTMi from '../../../assets/USDT-FTM-i.png';
import Tenexlogo from '../../../assets/Tenex.png';
import tenexarrow from '../../../assets/tenex-arrow.png';
import { GlobalButton } from '../../common';
import IncentiveTokenPopup from '../Modules/IncentiveTokenPopup';
import IncentiveTokenPopup2 from '../Modules/IncentiveTokenPopup2';

import {
  Section,
  Row,
  Column60,
  Column40,
  IncentiveLeftBar,
  IncentiveLeftBarBox1,
  ImgUSTDFTM,
  Img2,
  Img4,
  IncentiveLeftBarBox1info,
  IncentiveLeftBarBox1infoCol1,
  IncentiveLeftBarBox1infoCol1StableRow,
  UtmLabel,
  IncentiveLeftBarBox1infoCol1Stable,
  IncentiveLeftBarBox1infoCol1Count,
  IncentiveLeftBarBox1infoCol1Icon,
  IncentiveLeftBarBox1UTM,
  IncentiveLeftBarBox1infoCol2,
  IncentiveLeftBarBox1infoCol2Row1,
  IncentiveLeftBarBox1infoCol2Row2,
  Box2Container,
  Box2DataPoint1,
  Box2DataPoint2,
  Box2DataPoint4,
  Box2Title,
  Box2Value,
  Box2DataPoint3,
  Box2DataPoint1Tenex,
  Box2TokenName,
  Box2TitleAvailable,
  Box2ValueAvailable,
  Box2ProgressContainer,
  Box2ProgressBar,
  Box2PercentageBar,
  Box2Percentage,
  Box2ContainerBorder,
  LiquidityBox,
  LiquidityText1,
  LiquidityText2,
  YourDepositsBox,
  IncentivesBox2,
  IncentivesBox2Paragraph,
  IncentivizeOrderedList,
  IncentivizeListItem,
  IncentivizeText,
  IncentivizeTextCircle,
  LiquidityBoxHeading,
} from '../Styles/IncentiveSection.style';

import { ImgRightIcon, ImgLeftIcon } from '../Styles/IncentiveTokenPopup.style';
import { useAccount } from '../../../hooks/useAccount';

interface PoolInfo {
  id: string;
  pair: string;
  icon1: string;
  icon2: string;
  stablePercentage: number;
  tvl: string;
  apr: number;
  volume: string;
  volumeDesc: string;
  volumeSubDesc: string;
  fees: string;
  feesDesc: string;
  feesSubDesc: string;
  poolBalance: string;
  balanceDesc: string;
  liquidityType: string;
}

const IncentiveSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [hasSelectedToken, setHasSelectedToken] = useState<boolean>(false);

  const { address } = useAccount();
  const [selectedToken1, setSelectedToken1] = useState<PoolInfo | undefined>(
    undefined
  );
  const [selectedToken2, setSelectedToken2] = useState<PoolInfo | undefined>(
    undefined
  );

  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');
  const [tokenSelectTarget2, setTokenSelectTarget2] =
    useState<'token1'>('token1');

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
    setHasSelectedToken(true);
  };

  const handleTokenSelectOpen2 = (target: 'token1') => {
    setTokenSelectTarget2(target);
    setIsModalOpen2(true);
  };

  const handleTokenSelect = (token: PoolInfo) => {
    if (tokenSelectTarget === 'token1') {
      setSelectedToken1(token);
    }
  };

  const handleTokenSelect2 = (token: PoolInfo) => {
    if (tokenSelectTarget2 === 'token1') {
      setSelectedToken2(token);
    }
  };

  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <Section>
      <Row>
        <Column60>
          <IncentiveLeftBar>
            <IncentiveLeftBarBox1>
              <IncentiveLeftBarBox1info>
                <IncentiveLeftBarBox1infoCol1>
                  {selectedToken1 ? (
                    <>
                      <ImgLeftIcon
                        src={selectedToken1.icon1}
                        alt="Icon 1"
                        width={36}
                        height={36}
                      />
                      <ImgRightIcon
                        src={selectedToken1.icon2}
                        alt="Icon 2"
                        width={36}
                        height={36}
                      />
                    </>
                  ) : (
                    <ImgUSTDFTM src={USDTFTM} alt="Default Icon" />
                  )}
                  <IncentiveLeftBarBox1UTM>
                    <UtmLabel>
                      {selectedToken1 ? selectedToken1.pair : 'USDT-FTM'}
                    </UtmLabel>
                    <IncentiveLeftBarBox1infoCol1StableRow>
                      <IncentiveLeftBarBox1infoCol1Stable>
                        Stable
                      </IncentiveLeftBarBox1infoCol1Stable>
                      <IncentiveLeftBarBox1infoCol1Count>
                        0.01%
                      </IncentiveLeftBarBox1infoCol1Count>
                      <IncentiveLeftBarBox1infoCol1Icon>
                        <Img4 src={USDTFTMi} />
                      </IncentiveLeftBarBox1infoCol1Icon>
                    </IncentiveLeftBarBox1infoCol1StableRow>
                  </IncentiveLeftBarBox1UTM>
                </IncentiveLeftBarBox1infoCol1>
                <IncentiveLeftBarBox1infoCol2>
                  <IncentiveLeftBarBox1infoCol2Row1>
                    <GlobalButton
                      padding="10px"
                      width="150px"
                      onClick={() => handleTokenSelectOpen('token1')}
                    >
                      Change
                    </GlobalButton>
                  </IncentiveLeftBarBox1infoCol2Row1>
                  <IncentiveLeftBarBox1infoCol2Row2 />
                </IncentiveLeftBarBox1infoCol2>
              </IncentiveLeftBarBox1info>
              <IncentiveLeftBarBox1info>
                <IncentiveLeftBarBox1infoCol1>
                  <LiquidityBox>
                    <LiquidityBoxHeading>Liquidity</LiquidityBoxHeading>
                    <LiquidityText1>1,003,212.5643 USDT</LiquidityText1>
                    <LiquidityText2>2,783,860.003 FTM</LiquidityText2>
                  </LiquidityBox>
                </IncentiveLeftBarBox1infoCol1>
                <IncentiveLeftBarBox1infoCol2>
                  <YourDepositsBox>
                    <LiquidityBoxHeading>Your Deposits</LiquidityBoxHeading>
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
              <Box2ContainerBorder>
                <Box2ProgressContainer>
                  <Box2ProgressBar value={value} onChange={handleChange} />
                  <Box2Container>
                    <Box2DataPoint1Tenex
                      onClick={() => handleTokenSelectOpen2('token1')}
                    >
                      <Img2
                        width={20}
                        height={20}
                        src={selectedToken2 ? selectedToken2.icon1 : Tenexlogo}
                      />
                      <Box2TokenName>
                        {selectedToken2 ? selectedToken2.pair : 'TENEX'}
                      </Box2TokenName>
                      <Img4 src={tenexarrow} />
                    </Box2DataPoint1Tenex>
                  </Box2Container>
                </Box2ProgressContainer>
                <Box2PercentageBar>
                  <Box2DataPoint4>
                    <Box2TitleAvailable>Wallet: 0.000</Box2TitleAvailable>
                    <Box2ValueAvailable>~</Box2ValueAvailable>
                    <Box2ValueAvailable>$0.00</Box2ValueAvailable>
                  </Box2DataPoint4>
                  <Box2Percentage>0%</Box2Percentage>
                  <Box2Percentage>25%</Box2Percentage>
                  <Box2Percentage>50%</Box2Percentage>
                  <Box2Percentage>75%</Box2Percentage>
                  <Box2Percentage>MAX%</Box2Percentage>
                </Box2PercentageBar>
              </Box2ContainerBorder>
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
            {selectedToken1 && (
              <IncentivesBox2Paragraph>
                {selectedToken1.pair} gauge not found
              </IncentivesBox2Paragraph>
            )}
            {selectedToken1 && (
              <GlobalButton padding="20px">Continue</GlobalButton>
            )}

            {!hasSelectedToken && (
              <IncentivizeOrderedList>
                <IncentivizeListItem>
                  <IncentivizeTextCircle>1</IncentivizeTextCircle>
                  <IncentivizeText>
                    Select the liquidity pool to incentivize.
                  </IncentivizeText>
                </IncentivizeListItem>
                <IncentivizeListItem>
                  <IncentivizeTextCircle>2</IncentivizeTextCircle>
                  <IncentivizeText>
                    Select the token you want to use for the incentive.
                  </IncentivizeText>
                </IncentivizeListItem>
                <IncentivizeListItem>
                  <IncentivizeTextCircle>3</IncentivizeTextCircle>
                  <IncentivizeText>
                    Specify the amount of your incentive.
                  </IncentivizeText>
                </IncentivizeListItem>
              </IncentivizeOrderedList>
            )}
            <IncentiveTokenPopup
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelect={handleTokenSelect}
              account={address!}
            />
          </IncentiveLeftBarBox1>
          <IncentiveTokenPopup2
            isOpen={isModalOpen2}
            onClose={() => setIsModalOpen2(false)}
            onSelect={handleTokenSelect2}
            account={address!}
          />
        </Column40>
      </Row>
    </Section>
  );
};

export default IncentiveSection;
