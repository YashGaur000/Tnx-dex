import styled from 'styled-components';
import CopyIcon from '../../assets/copy.svg';
import { DefaultTheme } from '../../styles/Theme';
import { useState } from 'react';
import SucessIcon from '../../assets/check.svg';
const CopyIconstyle = styled.img`
  width: 12px;
  height: 12px;
`;
const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Copytext = styled.p<{ theme: DefaultTheme; fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize ?? '16'}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
`;
const CopyIconWrapper = styled.div<{ theme: DefaultTheme }>``;
interface copyProps {
  copydata: string;
}

const Copy: React.FC<copyProps> = ({ copydata }) => {
  const [isCopied, setIsCopied] = useState(false);

  const truncateString = (str: string): string => {
    if (str.length <= 15) {
      return str;
    }
    return `${str.slice(0, 6)}...${str.slice(-9)}`;
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(copydata)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <CopyContainer>
      <Copytext fontSize={12}>{truncateString(copydata)}</Copytext>
      <CopyIconWrapper onClick={(e) => e.stopPropagation()}>
        {isCopied ? (
          <CopyIconstyle src={SucessIcon} />
        ) : (
          <CopyIconstyle src={CopyIcon} onClick={handleCopy} />
        )}
      </CopyIconWrapper>
    </CopyContainer>
  );
};

export default Copy;
