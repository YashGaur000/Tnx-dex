import InformIcon from '../../../assets/questionMark.png';
import TenexIcon from '../../../assets/Tenex.png';
import { useState } from 'react';
import LockScreenHover from './LockScreenHover';
import {
  CardContainsLockScreen,
  TokenDate,
  Tokenstyle,
  Labeltoken,
  ImgStyleSplit,
  TipsIconWrapper,
} from '../Styles/SplitAndMergelockScreen.style';
import { TitleWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
const SplitCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainsLockScreen>
      <Tokenstyle>
        <Labeltoken fontSize={15}>2462545368625</Labeltoken>
        <TokenDate fontSize={12}>
          1 Year 321 Days{' '}
          <TipsIconWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ImgStyleSplit src={InformIcon} />
            {isHovered && <LockScreenHover />}
          </TipsIconWrapper>
        </TokenDate>
      </Tokenstyle>
      <Tokenstyle>
        <TitleWrapper fontSize="16px">
          54 <ImgStyleSplit src={TenexIcon} />{' '}
        </TitleWrapper>
        <TokenDate fontSize={12}>Stake</TokenDate>
      </Tokenstyle>
      <Tokenstyle>
        <TitleWrapper fontSize="16px">32.00</TitleWrapper>
        <TokenDate fontSize={12}>Voting Power</TokenDate>
      </Tokenstyle>
    </CardContainsLockScreen>
  );
};

export default SplitCard;
