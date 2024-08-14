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
} from './styles/TokenSelectModal.style';
import tenex from '../../assets/Tenex.png';
import { useTokenBalances } from '../../hooks/useTokenBalance';
import { Address } from 'viem';

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: TokenInfo) => void;
  account: Address;
}

const TokenSelectModal: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  account,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  // console.log("actual rtoken list:",ERC20_TEST_TOKEN_LIST)
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

  const filteredTokens = ERC20_TEST_TOKEN_LIST.filter((token) =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
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
              <img
                src={token.logoURI ? token.logoURI : tenex}
                width={21}
                height={22}
                alt={token.symbol}
              />
              {token.symbol} <br /> {truncateString(token.address)}
              <p
                style={{
                  marginLeft: '150px',
                }}
              >
                {account && balances[token.address].toString()}
              </p>
            </TokenItem>
          ))}
        </TokenList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TokenSelectModal;
