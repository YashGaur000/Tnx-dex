import { HoverContainer } from '../../../ManageVeTenex/Modules/LockScreenHover';
import styled from 'styled-components';
import { DefaultTheme } from '../../../../styles/Theme';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import Copy from '../../../common/Copy';

const InfoHoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

interface LiquidityInfoProps {
  poolId?: string;
  gaugeId?: string;
}

const LiquidityInfo = ({ poolId, gaugeId }: LiquidityInfoProps) => {
  return (
    <HoverContainer width="180px" height="200px" top="0px" left="0px">
      <InfoHoverContainer>
        <InfoHoverSection>
          <LiquidityHeaderTitle fontSize={14}>
            Pool Address
          </LiquidityHeaderTitle>
          <LiquidityHeaderTitle fontSize={12}>
            {poolId && <Copy copydata={poolId} />}
          </LiquidityHeaderTitle>
        </InfoHoverSection>
        <InfoHoverSection>
          <LiquidityHeaderTitle fontSize={14}>
            Gauge Address
          </LiquidityHeaderTitle>
          <LiquidityHeaderTitle fontSize={12}>
            {gaugeId && <Copy copydata={gaugeId} />}
          </LiquidityHeaderTitle>
        </InfoHoverSection>
      </InfoHoverContainer>
    </HoverContainer>
  );
};

export default LiquidityInfo;
