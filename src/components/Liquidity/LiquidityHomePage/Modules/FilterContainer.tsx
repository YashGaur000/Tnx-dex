import React, { useState } from 'react';
import SearchIcon from '../../../../assets/search-icon.png';
import { Input } from '../../../common';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import {
  FilterContainerStyle,
  FilterWrapper,
  FilterButtonContainer,
  FilterButton,
  SearchBoxContainer,
  FilterWithSearchStyle,
} from '../styles/LiquidityFilter.style';
import DropDown from '../../../common/DropDown';

interface Option {
  id: number;
  label: string;
}

const FilterContainer: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Posts');
  const ButtonData: string[] = [
    'All Posts',
    'Stable',
    'Volatile',
    'Concentrated',
    'Low TVL',
  ];

  const options: Option[] = [
    { id: 1, label: 'Active' },
    { id: 2, label: 'New' },
    { id: 3, label: 'Participant' },
    { id: 4, label: 'Others' },
  ];

  const handleFilterClick = (item: string): void => {
    console.log(item);
    setSelectedFilter(item);
  };

  const handleSelectOption = (option: Option): void => {
    console.log(option);
  };

  return (
    <FilterContainerStyle>
      <LiquidityHeaderTitle fontSize={20}>Liquidity Pools</LiquidityHeaderTitle>
      <FilterWrapper>
        <FilterButtonContainer>
          {ButtonData.map((item, key) => (
            <FilterButton
              key={key}
              onClick={() => handleFilterClick(item)}
              selected={selectedFilter === item}
            >
              {item}
            </FilterButton>
          ))}
        </FilterButtonContainer>
        <FilterWithSearchStyle>
          <div>
            {' '}
            <DropDown onSelect={handleSelectOption} options={options} />
          </div>
          <SearchBoxContainer>
            <img src={SearchIcon} alt="Search Icon" />
            <Input
              type="text"
              placeholder="Search by symbol or address"
              width="100%"
              height="30px"
            />
          </SearchBoxContainer>
        </FilterWithSearchStyle>
      </FilterWrapper>
    </FilterContainerStyle>
  );
};

export default FilterContainer;
