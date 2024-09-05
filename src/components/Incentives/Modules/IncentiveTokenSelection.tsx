import React, { useState } from 'react';
import tenexarrow from '../../../assets/tenex-arrow.png';
import Tenexlogo from '../../../assets/Tenex.png';

import {
  IncentiveLeftBarBox1,
  Img2,
  Img4,
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
} from '../Styles/IncentiveSection.style';

import { useAccount } from '../../../hooks/useAccount';
import TokenSelectModal from '../../modal/TokenSelectModal';
import { useRootStore } from '../../../store/root';
import { TokenInfo } from '../../../constants/tokens';

interface IncentiveTokenSelectionProps {
  handleIncentiveFormValue: (inputValue: number) => void; // Updated to be a function
  handleTokenSymbol: (symbol: string) => void;
}

const IncentiveTokenSelection: React.FC<IncentiveTokenSelectionProps> = ({
  handleIncentiveFormValue,
  handleTokenSymbol,
}) => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const { address } = useAccount();
  const { setFrom, setTo } = useRootStore();
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo | null>(null);
  const [tokenSelectTarget2, setTokenSelectTarget2] =
    useState<'token1'>('token1');

  const handleTokenSelectOpen2 = (target: 'token1') => {
    setTokenSelectTarget2(target);
    setIsModalOpen2(true);
  };

  const handleTokenSelect2 = (token: TokenInfo) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (tokenSelectTarget2 === 'token1') {
      setFrom(token.address);
      setSelectedToken2(token);
      queryParams.set('from', token.address);
    } else {
      setTo(token.address);
      setSelectedToken2(token);
      queryParams.set('to', token.address);
    }
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState(null, '', newUrl);
    setIsModalOpen2(false);

    handleTokenSymbol(token.symbol);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value); // Ensure inputValue is a number
    handleIncentiveFormValue(inputValue); // Call the function
  };

  if (!address) {
    return <div>No account connected.</div>;
  }

  return (
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
          <Box2ProgressBar type="number" onChange={handleChange} />
          <Box2Container>
            <Box2DataPoint1Tenex
              onClick={() => handleTokenSelectOpen2('token1')}
            >
              {selectedToken2 ? (
                <>
                  <Img2
                    width={20}
                    height={20}
                    src={selectedToken2.logoURI}
                    alt={selectedToken2.symbol}
                  />
                  <Box2TokenName>{selectedToken2.symbol}</Box2TokenName>
                </>
              ) : (
                <>
                  <Img2 width={20} height={20} src={Tenexlogo} alt="TENEX" />
                  <Box2TokenName>TENEX</Box2TokenName>
                </>
              )}
              <Img4 src={tenexarrow} alt="Select Arrow" />
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
      <TokenSelectModal
        isOpen={isModalOpen2}
        onClose={() => setIsModalOpen2(false)}
        onSelect={handleTokenSelect2}
        account={address}
      />
    </IncentiveLeftBarBox1>
  );
};

export default IncentiveTokenSelection;
