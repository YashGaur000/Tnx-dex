// import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { styled } from 'styled-components';
import { DefaultTheme } from '../styles/Theme';
import searchicon from '../assets/search-icon.png';

const InputWrapper = styled.div<{ Width?: string; theme: DefaultTheme }>`
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 10px;
  display: flex;
  width: ${({ Width }) => Width};
`;

const Input = styled.input<{ theme: DefaultTheme }>`
  border-color: ${({ theme }) => theme.colors.greyBorder};
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const SearchIconbox = styled.img`
  width: 21.19px;
  height: 21.19px;
  margin-left: 12px;
  margin-top: 8px;
  margin-right: 12px;
`;

const SearchBar: React.FC = () => {
  return (
    <InputWrapper Width="490px">
      <SearchIconbox src={searchicon} alt="SearchIcon Logo" />
      <Input
        type="text"
        placeholder="Search by symbol or address"
        // value={inputValue1}
        // onChange={(e) => setInputValue1(e.target.value)}
      />
    </InputWrapper>
  );
};

export default SearchBar;
