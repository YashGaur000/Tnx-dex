import React, { useState } from 'react';
import styled from 'styled-components';
import { TOKEN_LIST } from '../../constants/tokens';
import { DefaultTheme } from '../../styles/Theme';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalWrapper = styled.div<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: flex;
`;

const ModalContent = styled.div<{ theme: DefaultTheme }>`
  background: linear-gradient(90deg, #18264c 0%, #1f305f 100%);
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  max-height: 80vh;
`;

const SearchInput = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 21px;
  color: grey;
  background: linear-gradient(90deg, #18264c 0%, #1f305f 100%);
`;

const TokenList = styled.ul<{ theme: DefaultTheme }>`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 60vh;
  overflow-y: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: green black; /* For Firefox */

  /* Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #16c062 0%, #3eacfc 100%);
    border-radius: 10px;
  }
`;

const TokenItem = styled.li<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: grey;
  }

  img {
    width: 35px;
    height: 36px;
    border-radius: 30px;
    padding: 7px;
    object-fit: cover;
  }
`;
const SearchWrapper = styled.div<{ theme: DefaultTheme }>`
  position: relative;
  margin-bottom: 10px;
`;
const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 42%;
  left: 13px;
  transform: translateY(-50%);
  color: #888;
`;
const HeaderTokenContent = styled.div<{ theme: DefaultTheme }>``;
const HeaderLeftContent = styled.span<{ theme: DefaultTheme }>``;
const HeaderRightContent = styled.span<{ theme: DefaultTheme }>`
  margin-left: 300px;
`;

interface TokenSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: string) => void;
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

  const handleSelectToken = (token: string) => {
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
              onClick={() => handleSelectToken(token.symbol)}
            >
              <img
                src={token.logoURI}
                width={21}
                height={22}
                alt={token.logoURI}
              />
              {token.symbol} <br></br> {truncateString(token.address)}
            </TokenItem>
          ))}
        </TokenList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TokenSelectModal;
