import { HoverContainer } from '../../../ManageVeTenex/Modules/LockScreenHover';
import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import CopyIcon from '../../../../assets/copy.svg';
const InfoHoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CopyImg = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;
const InfoHoverSection = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.whiteBorder};
  background: ${({ theme }) => theme.colors.cardLight};
  border-radius: 10px;
  padding: 10px;
  align-items: flex-start;
`;

const LiquidityInfo = () => {
  return (
    <HoverContainer width="180px" height="200px">
      <InfoHoverContainer>
        <InfoHoverSection>
          <LiquidityHeaderTitle fontsize={14}>
            Pool Address
          </LiquidityHeaderTitle>
          <LiquidityHeaderTitle fontsize={12}>
            0x921da13....d23f0 <CopyImg src={CopyIcon} />
          </LiquidityHeaderTitle>
        </InfoHoverSection>
        <InfoHoverSection>
          <LiquidityHeaderTitle fontsize={14}>
            Gauge Address
          </LiquidityHeaderTitle>
          <LiquidityHeaderTitle fontsize={12}>
            0x921da13....d23f0 <CopyImg src={CopyIcon} />
          </LiquidityHeaderTitle>
        </InfoHoverSection>
      </InfoHoverContainer>
    </HoverContainer>
  );
};

export default LiquidityInfo;
