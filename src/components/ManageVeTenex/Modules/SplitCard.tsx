import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import InformIcon from '../../../assets/information.png';
import TenexIcon from '../../../assets/Tenex.png';

const CardSplitContains = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.cardLight};
  padding: 10px 15px;

  border-radius: 15px;
`;

const Tokenstyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const ImgStyleSplit = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;
const Labeltoken = styled.label<{ theme: DefaultTheme; fontSize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

const TokenDate = styled.div<{ theme: DefaultTheme; fontSize: number }>`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.greyDark};
`;

const SplitCard: React.FC = () => {
  return (
    <CardSplitContains>
      <Tokenstyle>
        <Labeltoken fontSize={15}>2462545368625</Labeltoken>
        <TokenDate fontSize={12}>
          1 Year 321 Days <ImgStyleSplit src={InformIcon} />
        </TokenDate>
      </Tokenstyle>
      <Tokenstyle>
        <div>
          54 <ImgStyleSplit src={TenexIcon} />{' '}
        </div>
        <TokenDate fontSize={12}>Stake</TokenDate>
      </Tokenstyle>
      <Tokenstyle>
        <div>32.00</div>
        <TokenDate fontSize={12}>Voting Power</TokenDate>
      </Tokenstyle>
    </CardSplitContains>
  );
};

export default SplitCard;
