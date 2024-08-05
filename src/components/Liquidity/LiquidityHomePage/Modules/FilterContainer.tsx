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
  LiquidityFilterSelect,
  SelectOption,
} from '../styles/LiquidityFilter.style';

const FilterContainer = () => {
  const ButtonData = [
    'All Posts',
    'Stable',
    'Volatile',
    'Concentrated',
    'Low TVL',
  ];
  return (
    <FilterContainerStyle>
      <LiquidityHeaderTitle fontSize={20}>Liquidity Pools</LiquidityHeaderTitle>
      <FilterWrapper>
        <FilterButtonContainer>
          {ButtonData.map((item, key) => (
            <FilterButton key={key}>{item}</FilterButton>
          ))}
        </FilterButtonContainer>
        <FilterWithSearchStyle>
          <LiquidityFilterSelect>
            <SelectOption>Active</SelectOption>
            <SelectOption>New</SelectOption>
            <SelectOption>Participant</SelectOption>
            <SelectOption>Others</SelectOption>
          </LiquidityFilterSelect>
          <SearchBoxContainer>
            <img src={SearchIcon} />
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
