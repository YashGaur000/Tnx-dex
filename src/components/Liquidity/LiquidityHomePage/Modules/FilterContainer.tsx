import React, { ChangeEvent, useState } from 'react';
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
interface FilterContainerProps {
  handleSelectedFilterItem: (item: string) => void;
  handleSearchFeatures: (item: string) => void;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
  handleSelectedFilterItem,
  handleSearchFeatures,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Pools');
  const [InputData, setInputData] = useState('');
  const ButtonData: string[] = [
    'All Pools',
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
    setSelectedFilter(item);
    handleSelectedFilterItem(item);
  };

  const handleSelectOption = (option: Option): void => {
    console.log(option);
  };

  const handlePoolTabelSearchBox = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
    handleSearchFeatures(e.target.value);
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
              value={InputData}
              onChange={handlePoolTabelSearchBox}
            />
          </SearchBoxContainer>
        </FilterWithSearchStyle>
      </FilterWrapper>
    </FilterContainerStyle>
  );
};

export default FilterContainer;
