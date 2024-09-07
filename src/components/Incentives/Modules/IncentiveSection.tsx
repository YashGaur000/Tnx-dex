import React, { useEffect, useState } from 'react';
import USDTFTM from '../../../assets/USDT-FTM.png';
import USDTFTMi from '../../../assets/USDT-FTM-i.png';
import { GlobalButton } from '../../common';
// import IncentiveTokenPopup from '../Modules/IncentiveTokenPopup';
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
// import { useAccount } from '../../../hooks/useAccount';
import useQueryParams from '../../../hooks/useQueryParams';
import { useLiquidityPoolDataById } from '../../../hooks/useLiquidityPoolDataById';

import { TokenInfo } from '../../../constants/tokens';
import { getTokenInfo } from '../../../utils/transaction/getTokenInfo';
import contractAddresses from '../../../constants/contract-address/address';

const IncentiveSection: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState<number>(0);
  const [tokenSymbol, setTokenSymbol] = useState<string>('TENEX');
  const [incentiveToken, setIncentiveToken] = useState<TokenInfo | undefined>(
    getTokenInfo(contractAddresses.TENEX)
  );

  // const { address } = useAccount();
  const [selectedToken1, setSelectedToken1] = useState<TokenInfo | undefined>(
    undefined
  );
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo | undefined>(
    undefined
  );
  // const [selectedIncentiveToken, setSelectedIncentiveToken] = useState<TokenInfo | undefined>(
  //   undefined
  // );

  // const [tokenSelectTarget, setTokenSelectTarget] = useState<
  //   'token1' | 'token2'
  // >('token1');

  const getParam = useQueryParams();
  const poolId = getParam('pool') ?? '';
  const { data: poolData } = useLiquidityPoolDataById(poolId);

  console.log(tokenSymbol);
  useEffect(() => {
    if (poolData?.[0]) {
      const token1 = poolData[0].token0?.id.match(/0x[a-fA-F0-9]{40}/) ?? '';
      const token2 = poolData[0].token1?.id.match(/0x[a-fA-F0-9]{40}/) ?? '';

      setSelectedToken1(getTokenInfo(token1[0]));
      setSelectedToken2(getTokenInfo(token2[0]));
    }
  }, [poolData]);

  // const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
  //   setTokenSelectTarget(target);
  //   setIsModalOpen(true);
  // };

  // const handleTokenSelect = (token: TokenInfo) => {
  //   if (tokenSelectTarget === 'token1') {
  //     setSelectedToken1(token);
  //   }
  // };
  const handleIncentiveFormValue = (inputValue: number) => {
    setValue(inputValue);
  };
  const handleTokenSymbol = (token: TokenInfo) => {
    setTokenSymbol(token.symbol);
    setIncentiveToken(token);
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
                        src={selectedToken1?.logoURI}
                        alt="Icon 1"
                        width={36}
                        height={36}
                      />
                      <ImgRightIcon
                        src={selectedToken2?.logoURI}
                        alt="Icon 2"
                        width={36}
                        height={36}
                      />
                    </>
                  ) : (
                    <ImgUSTDFTM src={USDTFTM} alt="Default Icon" />
                  )}
                  <IncentiveLeftBarBox1UTM>
                    <UtmLabel>{poolData[0]?.name}</UtmLabel>
                    <IncentiveLeftBarBox1infoCol1StableRow>
                      <IncentiveLeftBarBox1infoCol1Stable>
                        {poolData[0]?.isStable ? 'stable' : 'volatile'}
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
                      // onClick={() => handleTokenSelectOpen('token1')}
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
                    <LiquidityText1>
                      {poolData[0]?.reserve0} {poolData[0]?.token0.symbol}
                    </LiquidityText1>
                    <LiquidityText2>
                      {poolData[0]?.reserve1} {poolData[0]?.token1.symbol}
                    </LiquidityText2>
                  </LiquidityBox>
                </IncentiveLeftBarBox1infoCol1>
                <IncentiveLeftBarBox1infoCol2>
                  <YourDepositsBox>
                    <LiquidityBoxHeading>Your Deposits</LiquidityBoxHeading>
                    <LiquidityText1>
                      0.0 {poolData[0]?.token0.symbol}
                    </LiquidityText1>
                    <LiquidityText2>
                      0.0 {poolData[0]?.token1.symbol}
                    </LiquidityText2>
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
            tokenSymbol={incentiveToken}
            poolData={poolData}
          />
          {/* <IncentiveTokenPopup
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSelect={handleTokenSelect}
            account={address!}
          /> */}
        </Column40>
      </Row>
    </Section>
  );
};

export default IncentiveSection;
