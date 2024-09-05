import React, { useState } from 'react';
import USDTFTM from '../../../assets/USDT-FTM.png';
import USDTFTMi from '../../../assets/USDT-FTM-i.png';
import { GlobalButton } from '../../common';
import IncentiveTokenPopup from '../Modules/IncentiveTokenPopup';
import IncentiveRightContent from '../Modules/IncentiveRightContent';
import IncentiveTokenSelection from '../Modules/IncentiveTokenSelection';

import {
  Section,
  Row,
  Column60,
  Column40,
  IncentiveLeftBar,
  IncentiveLeftBarBox1,
  ImgUSTDFTM,
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
  LiquidityBox,
  LiquidityText1,
  LiquidityText2,
  YourDepositsBox,
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
  const [value, setValue] = useState<number>(0);
  const [tokenSymbol, setTokenSymbol] = useState<string>('TENEX');
  const { address } = useAccount();
  const [selectedToken1, setSelectedToken1] = useState<PoolInfo | undefined>(
    undefined
  );

  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: PoolInfo) => {
    if (tokenSelectTarget === 'token1') {
      setSelectedToken1(token);
    }
  };
  const handleIncentiveFormValue = (inputValue: number) => {
    setValue(inputValue);
  };
  const handleTokenSymbol = (symbol: string) => {
    setTokenSymbol(symbol);
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
                      height="40px"
                      width="80px"
                      margin="0px"
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
            <IncentiveTokenSelection
              handleIncentiveFormValue={handleIncentiveFormValue}
              handleTokenSymbol={handleTokenSymbol}
            />
          </IncentiveLeftBar>
        </Column60>
        <Column40>
          <IncentiveRightContent
            InsentiveFormValue={value}
            tokenSymbol={tokenSymbol}
          />
          <IncentiveTokenPopup
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSelect={handleTokenSelect}
            account={address!}
          />
        </Column40>
      </Row>
    </Section>
  );
};

export default IncentiveSection;
