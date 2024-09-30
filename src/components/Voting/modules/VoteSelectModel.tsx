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
const lockTokenInfo = locktokeninfo();
import { Nft } from '../../../types/VotingEscrow';
import {
  getTimeDifference,
  locktokeninfo,
} from '../../../utils/common/voteTenex';

interface VoteSelectedCardProps {
  handleSelectedNft: (selectedNft: Nft) => void;
  nftData: Nft[];
}
const VoteSelectModel: React.FC<VoteSelectedCardProps> = ({
  handleSelectedNft,
  nftData,
}) => {
  console.log(nftData);

  return (
    <LockTokenContainer>
      <LockHeaderTitle margin="0px 0px 0px 25px" fontSize={24}>
        Select lock to vote
      </LockHeaderTitle>
      <TokenListsWrapper>
        <ScrollContainer>
          <TokenList>
            {nftData.map((nft, index) => {
              const metadata = nft.metadata;
              const attributes = metadata.attributes;

              const unlockDate =
                attributes.find((attr) => attr.trait_type === 'Unlock Date')
                  ?.value ?? '';
              const formatUnloackData = getTimeDifference(unlockDate);

              return (
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
                        {nft.metadata.attributes[2].value}{' '}
                        {lockTokenInfo.symbol} locked for {formatUnloackData}
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
              );
            })}
          </TokenList>
        </ScrollContainer>
      </TokenListsWrapper>
    </LockTokenContainer>
  );
};

export default VoteSelectModel;
