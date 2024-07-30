import React, { useState } from 'react';
import { TOKEN_LIST, TokenInfo } from '../../constants/tokens';
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

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: TokenInfo) => void;
}

const TokenSelectModal: React.FC<TokenSelectModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) {
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

  const filteredTokens = TOKEN_LIST.filter((token) =>
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
          <HeaderLeftContent>200 Tokens</HeaderLeftContent>
          <HeaderRightContent>Balance</HeaderRightContent>
        </HeaderTokenContent>

        <TokenList>
          {filteredTokens.map((token) => (
            <TokenItem
              key={token.symbol}
              onClick={() => handleSelectToken(token)}
            >
              <img
                src={token.logoURI}
                width={21}
                height={22}
                alt={token.symbol}
              />
              {token.symbol} <br /> {truncateString(token.address)}
            </TokenItem>
          ))}
        </TokenList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TokenSelectModal;
