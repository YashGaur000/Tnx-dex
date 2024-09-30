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

import { GradientButton } from '../../common';

import { Nft } from '../../../types/VotingEscrow';
interface VoteSelectedCardProps {
  handleSelectedNft: (selectedNft: Nft) => void;
  nftData: Nft[];
}
const VoteSelectModel: React.FC<VoteSelectedCardProps> = ({
  handleSelectedNft,
  nftData,
}) => {
  return (
    <LockTokenContainer>
      <LockHeaderTitle margin="0px 0px 0px 25px" fontSize={24}>
        Select lock to vote
      </LockHeaderTitle>
      <TokenListsWrapper>
        <ScrollContainer>
          <TokenList>
            {nftData.map((nft, index) => (
              <TokenItem key={index} onClick={() => handleSelectedNft(nft)}>
                <TokenItemWithAdressWrapper>
                  <TokenItemImage
                    src={TenexLogo}
                    width={36}
                    height={36}
                    alt={'Tenex Logo'}
                  />
                  <TokenNameWrapper>
                    <TokenItemData>
                      Lock #{nft.tokenId.toString()}
                    </TokenItemData>
                    <LockDescriptonTitle fontSize={12}>
                      {nft.metadata.attributes[2].value} VELO locked until{' '}
                      {nft.metadata.attributes[0].value}
                    </LockDescriptonTitle>
                  </TokenNameWrapper>
                </TokenItemWithAdressWrapper>
                <GradientButton
                  padding="4px 10px"
                  fontSize="12px"
                  width="auto"
                  height="26px"
                  lineheight="0px"
                  border="1.5px solid transparent"
                  borderradius="8px"
                  smfontSize={12}
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
