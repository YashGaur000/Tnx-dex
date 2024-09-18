import React, { useState } from 'react';
import {
  ERC20_TEST_TOKEN_LIST,
  //TOKEN_LIST,
  TokenInfo,
} from '../../constants/tokens';
import SearchIcons from '../../assets/search-icon.png';
import {
  HeaderleftContent,
  HeaderRightContent,
  HeaderTokenContent,
  ModalContent,
  ModalWrapper,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  TokenItem,
  TokenList,
  TokenItemImage,
  TokenItemData,
  TokenNameWrapper,
  TokenListsWrapper,
  ScrollContainer,
  TokenItemWithAdressWrapper,
} from './styles/TokenSelectModal.style';
import tenex from '../../assets/Tenex.png';

import { useTokenBalances } from '../../hooks/useTokenBalance';
import { Address } from 'viem';
import useQueryParams from '../../hooks/useQueryParams';
import BalanceDisplay from '../Swap/modules/BalanceDisplay';
import Copy from '../common/Copy';

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: TokenInfo) => void;
  account: Address;
  excludeToken1?: Address;
  excludeToken2?: Address;
}

const TokenSelectModal: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  account,
  excludeToken1,
  excludeToken2,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  // console.log("actual rtoken list:",ERC20_TEST_TOKEN_LIST)
  const getParam = useQueryParams();

  excludeToken1 = getParam('token1') as Address;
  excludeToken2 = getParam('token2') as Address;

  const { balances, loading, error } = useTokenBalances(
    ERC20_TEST_TOKEN_LIST,
    account
  );

  if (!isOpen || loading || error) {
    return null;
  }

  const handleSelectToken = (token: TokenInfo) => {
    onSelect(token);
    onClose();
  };

  const filteredTokens = ERC20_TEST_TOKEN_LIST.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) &&
      token.address !== excludeToken1 && // Exclude the selected token
      token.address !== excludeToken2
  );

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <SearchWrapper>
          <SearchIcon src={SearchIcons} />
          <SearchInput
            type="text"
            marginbottom="0px"
            placeholder="Search by symbol or address"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>
        <TokenListsWrapper>
          <HeaderTokenContent>
            <HeaderleftContent>
              {filteredTokens.length} Tokens
            </HeaderleftContent>
            <HeaderRightContent>Balance</HeaderRightContent>
          </HeaderTokenContent>
          <ScrollContainer>
            <TokenList>
              {filteredTokens.map((token) => (
                <TokenItem
                  key={token.symbol}
                  onClick={() => handleSelectToken(token)}
                >
                  <TokenItemWithAdressWrapper>
                    <TokenItemImage
                      src={token.logoURI ? token.logoURI : tenex}
                      width={36}
                      height={36}
                      alt={token.symbol}
                    />
                    <TokenNameWrapper>
                      <TokenItemData>{token.symbol}</TokenItemData>
                      <Copy copydata={token.address} />
                    </TokenNameWrapper>
                  </TokenItemWithAdressWrapper>
                  <TokenItemData fontsize={16}>
                    {account && token.symbol == 'ETH' ? (
                      <BalanceDisplay address={account} />
                    ) : (
                      balances[token.address].toString()
                    )}
                  </TokenItemData>
                </TokenItem>
              ))}
            </TokenList>
          </ScrollContainer>
        </TokenListsWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TokenSelectModal;
