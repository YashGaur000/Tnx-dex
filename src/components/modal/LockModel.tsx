import {
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../ManageVeTenex/Styles/ManageVetenex.style';
import {
  HeaderleftContent,
  HeaderRightContent,
  LockTokenContainer,
  HeaderTokenContent,
  ScrollContainer,
  TokenItem,
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenList,
  TokenListsWrapper,
  TokenNameWrapper,
} from './styles/TokenSelectModal.style';
import TenexLogo from '../../assets/Tenex.png';
import TenexLockData from '../../constants/TEnexLockData.json';
interface LockModelProps {
  handleSelectToken: (option: string) => void;
}
const LockModel: React.FC<LockModelProps> = ({ handleSelectToken }) => {
  return (
    <LockTokenContainer>
      <LockHeaderTitle margin="0px 0px 0px 25px" fontSize={24}>
        Select your lock to merge
      </LockHeaderTitle>
      <TokenListsWrapper>
        <HeaderTokenContent>
          <HeaderleftContent>{TenexLockData.length} Tokens</HeaderleftContent>
          <HeaderRightContent>Voting Power</HeaderRightContent>
        </HeaderTokenContent>
        <ScrollContainer>
          <TokenList>
            {TenexLockData.map((token, index) => (
              <TokenItem
                key={index}
                onClick={() => handleSelectToken(`Lock #${token.id}`)}
              >
                <TokenItemWithAdressWrapper>
                  <TokenItemImage
                    src={TenexLogo}
                    width={36}
                    height={36}
                    alt={'wrong'}
                  />
                  <TokenNameWrapper>
                    <TokenItemData>Lock #{token.id}</TokenItemData>
                    <LockDescriptonTitle fontSize={12}>
                      {token.amount} TENEX locked for {token.time}
                    </LockDescriptonTitle>
                  </TokenNameWrapper>
                </TokenItemWithAdressWrapper>
                <TokenItemData fontsize={16}>{token.votingpower}</TokenItemData>
              </TokenItem>
            ))}
          </TokenList>
        </ScrollContainer>
      </TokenListsWrapper>
    </LockTokenContainer>
  );
};

export default LockModel;
