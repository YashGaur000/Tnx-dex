import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../ManageVeTenex/Styles/ManageVetenex.style';
import {
  LockTokenContainer,
  ScrollContainer,
  TokenItem,
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenList,
  TokenListsWrapper,
  TokenNameWrapper,
} from '../../modal/styles/TokenSelectModal.style';
import TenexLogo from '../../../assets/Tenex.png';
import TenexLockData from '../../../constants/TEnexLockData.json';
import { GradientButton } from '../../common';
import { SelectLockDataType } from './VoteSelectedCard';
interface VoteSelectedCardProps {
  handleSelectToken: (token: SelectLockDataType) => void;
}
const VoteSelectModel: React.FC<VoteSelectedCardProps> = ({
  handleSelectToken,
}) => {
  return (
    <LockTokenContainer>
      <LockHeaderTitle margin="0px 0px 0px 25px" fontsize={24}>
        Select lock to vote
      </LockHeaderTitle>
      <TokenListsWrapper>
        <ScrollContainer>
          <TokenList>
            {TenexLockData.map((token, index) => (
              <TokenItem key={index} onClick={() => handleSelectToken(token)}>
                <TokenItemWithAdressWrapper>
                  <TokenItemImage
                    src={TenexLogo}
                    width={36}
                    height={36}
                    alt={'wrong'}
                  />
                  <TokenNameWrapper>
                    <TokenItemData>Lock #{token.id}</TokenItemData>
                    <LockDescriptonTitle fontsize={12}>
                      {token.amount} TENEX locked for {token.time}
                    </LockDescriptonTitle>
                  </TokenNameWrapper>
                </TokenItemWithAdressWrapper>
                <GradientButton
                  padding="4px 10px"
                  fontsize="12px"
                  width="auto"
                  height="26px"
                  lineheight="0px"
                  border="1.5px solid transparent"
                  borderradius="8px"
                  smfontsize={12}
                  smmargin="0px"
                >
                  Select
                </GradientButton>
              </TokenItem>
            ))}
          </TokenList>
        </ScrollContainer>
      </TokenListsWrapper>
    </LockTokenContainer>
  );
};

export default VoteSelectModel;
