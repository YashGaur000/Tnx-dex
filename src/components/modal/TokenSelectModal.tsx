import React, { useState } from 'react';
import {
  ERC20_TEST_TOKEN_LIST,
  //TOKEN_LIST,
  TokenInfo,
} from '../../constants/tokens';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderLeftContent,
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
} from './styles/TokenSelectModal.style';
import tenex from '../../assets/Tenex.png';
import { useTokenBalances } from '../../hooks/useTokenBalance';
import { Address } from 'viem';
import useQueryParams from '../../hooks/useQueryParams';
import BalanceDisplay from '../Swap/modules/BalanceDisplay';

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

  const truncateString = (str: string): string => {
    if (str.length <= 15) {
      return str;
    }
    return `${str.slice(0, 6)}...${str.slice(-9)}`;
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
          <SearchIcon icon={faSearch} />
          <SearchInput
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchWrapper>

        <HeaderTokenContent>
          <HeaderLeftContent>{filteredTokens.length} Tokens</HeaderLeftContent>
          <HeaderRightContent>Balance</HeaderRightContent>
        </HeaderTokenContent>

        <TokenList>
          {filteredTokens.map((token) => (
            <TokenItem
              key={token.symbol}
              onClick={() => handleSelectToken(token)}
            >
              <TokenItemImage
                src={token.logoURI ? token.logoURI : tenex}
                width={21}
                height={22}
                alt={token.symbol}
              />
              {token.symbol} <br /> {truncateString(token.address)}
              <TokenItemData
                style={{
                  marginLeft: '150px',
                }}
              >
                {account && token.symbol == 'ETH' ? (
                  <BalanceDisplay address={account} />
                ) : (
                  balances[token.address].toString()
                )}
              </TokenItemData>
            </TokenItem>
          ))}
        </TokenList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TokenSelectModal;
