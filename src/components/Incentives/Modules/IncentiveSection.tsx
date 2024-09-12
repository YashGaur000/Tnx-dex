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
  IncentiveleftBar,
  IncentiveleftBarBox1,
  ImgUSTDFTM,
  Img4,
  IncentiveleftBarBox1info,
  IncentiveleftBarBox1infoCol1,
  IncentiveleftBarBox1infoCol1StableRow,
  UtmLabel,
  IncentiveleftBarBox1infoCol1Stable,
  IncentiveleftBarBox1infoCol1Count,
  IncentiveleftBarBox1infoCol1Icon,
  IncentiveleftBarBox1UTM,
  IncentiveleftBarBox1infoCol2,
  IncentiveleftBarBox1infoCol2Row1,
  IncentiveleftBarBox1infoCol2Row2,
  LiquidityBox,
  LiquidityText1,
  LiquidityText2,
  YourDepositsBox,
  LiquidityBoxHeading,
} from '../Styles/IncentiveSection.style';

import { ImgRightIcon, ImgleftIcon } from '../Styles/IncentiveTokenPopup.style';
// import { useAccount } from '../../../hooks/useAccount';
import useQueryParams from '../../../hooks/useQueryParams';
import { useLiquidityPoolDataById } from '../../../hooks/useLiquidityPoolDataById';

import { TokenInfo } from '../../../constants/tokens';
import { getTokenInfo } from '../../../utils/transaction/getTokenInfo';
import contractAddresses from '../../../constants/contract-address/address';
import { usePoolBalances } from '../../../hooks/usePoolBalances';

const IncentiveSection: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState<number>(0);
  // const [tokenSymbol, setTokenSymbol] = useState<string>('TENEX');
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
  const { balance0, balance1, reserve0, reserve1 } = usePoolBalances(
    poolId ?? '',
    selectedToken1?.decimals ?? 18,
    selectedToken2?.decimals ?? 18
  );

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
    console.log('test ', token);
    // setTokenSymbol(token.symbol);
    setIncentiveToken(token);
  };

  return (
    <Section>
      <Row>
        <Column60>
          <IncentiveleftBar>
            <IncentiveleftBarBox1 height="232px" width="600px">
              <IncentiveleftBarBox1info>
                <IncentiveleftBarBox1infoCol1>
                  {selectedToken1 ? (
                    <>
                      <ImgleftIcon
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
                  <IncentiveleftBarBox1UTM>
                    <UtmLabel>{poolData[0]?.name}</UtmLabel>
                    <IncentiveleftBarBox1infoCol1StableRow>
                      <IncentiveleftBarBox1infoCol1Stable>
                        {poolData[0]?.isStable ? 'stable' : 'volatile'}
                      </IncentiveleftBarBox1infoCol1Stable>
                      <IncentiveleftBarBox1infoCol1Count>
                        0.01%
                      </IncentiveleftBarBox1infoCol1Count>
                      <IncentiveleftBarBox1infoCol1Icon>
                        <Img4 src={USDTFTMi} />
                      </IncentiveleftBarBox1infoCol1Icon>
                    </IncentiveleftBarBox1infoCol1StableRow>
                  </IncentiveleftBarBox1UTM>
                </IncentiveleftBarBox1infoCol1>
                <IncentiveleftBarBox1infoCol2>
                  <IncentiveleftBarBox1infoCol2Row1>
                    <GlobalButton
                      height="40px"
                      width="80px"
                      margin="0px"
                      // onClick={() => handleTokenSelectOpen('token1')}
                    >
                      Change
                    </GlobalButton>
                  </IncentiveleftBarBox1infoCol2Row1>
                  <IncentiveleftBarBox1infoCol2Row2 />
                </IncentiveleftBarBox1infoCol2>
              </IncentiveleftBarBox1info>
              <IncentiveleftBarBox1info>
                <IncentiveleftBarBox1infoCol1>
                  <LiquidityBox>
                    <LiquidityBoxHeading>Liquidity</LiquidityBoxHeading>
                    <LiquidityText1>
                      {reserve0} {poolData[0]?.token0.symbol}
                    </LiquidityText1>
                    <LiquidityText2>
                      {reserve1} {poolData[0]?.token1.symbol}
                    </LiquidityText2>
                  </LiquidityBox>
                </IncentiveleftBarBox1infoCol1>
                <IncentiveleftBarBox1infoCol2>
                  <YourDepositsBox>
                    <LiquidityBoxHeading>Your Deposits</LiquidityBoxHeading>
                    <LiquidityText1>
                      {balance0} {poolData[0]?.token0.symbol}
                    </LiquidityText1>
                    <LiquidityText2>
                      {balance1} {poolData[0]?.token1.symbol}
                    </LiquidityText2>
                  </YourDepositsBox>
                </IncentiveleftBarBox1infoCol2>
              </IncentiveleftBarBox1info>
            </IncentiveleftBarBox1>
            <IncentiveTokenSelection
              handleIncentiveFormValue={handleIncentiveFormValue}
              handleTokenSymbol={handleTokenSymbol}
            />
          </IncentiveleftBar>
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
