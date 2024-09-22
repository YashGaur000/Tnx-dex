import {
  CardContainsLockScreen,
  TokenDate,
  Tokenstyle,
  Labeltoken,
  ImgStyleSplit,
  CheckBoxStyle,
  CheckBoxContainer,
  TipsIconWrapper,
} from '../Styles/SplitAndMergelockScreen.style';
import InformIcon from '../../../assets/questionMark.png';
import TenexIcon from '../../../assets/Tenex.png';
import { useState } from 'react';
import LockScreenHover from './LockScreenHover';
import { TitleWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
const MergeCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CardContainsLockScreen>
      <CheckBoxContainer>
        <CheckBoxStyle type="checkbox" />
      </CheckBoxContainer>
      <Tokenstyle>
        <Labeltoken fontsize={15}>2462545368625</Labeltoken>
        <TokenDate fontsize={12}>
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
        <TitleWrapper fontsize="16">
          54 <ImgStyleSplit src={TenexIcon} />{' '}
        </TitleWrapper>
        <TokenDate fontsize={12}>Stake</TokenDate>
      </Tokenstyle>
      <Tokenstyle>
        <TitleWrapper fontsize="16">32.00</TitleWrapper>
        <TokenDate fontsize={12}>Voting Power</TokenDate>
      </Tokenstyle>
    </CardContainsLockScreen>
  );
};

export default MergeCard;
