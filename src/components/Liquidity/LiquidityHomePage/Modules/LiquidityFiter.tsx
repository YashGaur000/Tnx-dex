import { ChangeEvent, useState } from 'react';
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
  DropDownWrapper,
} from '../styles/LiquidityFilter.style';
import DropDown from '../../../common/DropDown';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';

interface Option {
  id: number;
  label: string;
}
interface LiquidityFilterProps {
  handleSelectedFilterItem: (item: string) => void;
  handleSearchFeatures: (item: string) => void;
}

const LiquidityFilter: React.FC<LiquidityFilterProps> = ({
  handleSelectedFilterItem,
  handleSearchFeatures,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Pools');
  const [InputData, setInputData] = useState('');
  const ButtonData: string[] = ['All Pools', 'Stable', 'Volatile', 'Low TVL'];

  const options: Option[] = [
    { id: 1, label: 'Active' },
    { id: 2, label: 'New' },
    { id: 3, label: 'Participant' },
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
          <DropDownWrapper>
            {' '}
            <DropDown onSelect={handleSelectOption} options={options} />
          </DropDownWrapper>
          <SearchBoxContainer>
            <ImageContainer
              width="16px"
              height="16px"
              src={SearchIcon}
              alt="Search Icon"
            />
            <Input
              type="text"
              placeholder="Search by symbol or address"
              width="100%"
              height="30px"
              fontsize="12px"
              value={InputData}
              onChange={handlePoolTabelSearchBox}
            />
          </SearchBoxContainer>
        </FilterWithSearchStyle>
      </FilterWrapper>
    </FilterContainerStyle>
  );
};

export default LiquidityFilter;
