import InformIcon from '../../../assets/information.png';
import TenexIcon from '../../../assets/Tenex.png';
import { useState } from 'react';
import LockScreenHover from './LockScreenHover';
import {
  CardContainsLockScreen,
  TokenDate,
  Tokenstyle,
  Labeltoken,
  ImgStyleSplit,
} from '../Styles/SplitAndMergelockScreen.style';
const SplitCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainsLockScreen>
      <Tokenstyle>
        <Labeltoken fontSize={15}>2462545368625</Labeltoken>
        <TokenDate fontSize={12}>
          1 Year 321 Days{' '}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ImgStyleSplit src={InformIcon} />
            {isHovered && <LockScreenHover />}
          </div>
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

export default SplitCard;
