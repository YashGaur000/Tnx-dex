import {
  CardContainsLockScreen,
  TokenDate,
  Tokenstyle,
  Labeltoken,
  ImgStyleSplit,
  CheckBoxStyle,
  CheckBoxContainer,
} from '../Styles/SplitAndMergelockScreen.style';
import InformIcon from '../../../assets/information.png';
import TenexIcon from '../../../assets/Tenex.png';
import { useState } from 'react';
import LockScreenHover from './LockScreenHover';
const MergeCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CardContainsLockScreen>
      <CheckBoxContainer>
        <CheckBoxStyle type="checkbox" />
      </CheckBoxContainer>
      <Tokenstyle>
        <Labeltoken fontSize={15}>2462545368625</Labeltoken>
        <TokenDate fontSize={12}>
          1 Year 321 Days{' '}
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ImgStyleSplit src={InformIcon} />
            {isHovered && <LockScreenHover />}
          </span>
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
    </CardContainsLockScreen>
  );
};

export default MergeCard;
