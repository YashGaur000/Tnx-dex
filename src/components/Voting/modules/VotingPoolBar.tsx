import {
  PoolTitleBox,
  Title,
  VotingPoolContainer,
} from '../styles/VotingPoolBar.style';

import {
  FilterButton,
  FilterButtonContainer,
  FilterWithSearchStyle,
  FilterWrapper,
  SearchBoxContainer,
} from '../../Liquidity/LiquidityHomePage/styles/LiquidityFilter.style';
import DropDown from '../../common/DropDown';
import { Input } from '../../common';
import SearchIcon from '../../../assets/search-icon.png';
import { ChangeEvent, useState } from 'react';
interface Option {
  id: number;
  label: string;
}
const VotingPoolBar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Most Rewarded');

  const ButtonData: string[] = ['Most Rewarded', 'Least Rewarded', 'All Pools'];

  const options: Option[] = [
    { id: 1, label: 'Active' },
    { id: 2, label: 'New' },
    { id: 3, label: 'Participant' },
    { id: 4, label: 'Others' },
  ];
  const handleFilterClick = (item: string): void => {
    setSelectedFilter(item);
  };

  const handleSelectOption = (option: Option): void => {
    console.log(option);
  };

  const handlePoolTabelSearchBox = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <VotingPoolContainer>
      <PoolTitleBox>
        <Title fontsize="20px">Voting Pools</Title>
      </PoolTitleBox>

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
            <DropDown onSelect={handleSelectOption} options={options} />
          </div>
          <SearchBoxContainer>
            <img src={SearchIcon} alt="Search Icon" />
            <Input
              type="text"
              placeholder="Search by symbol or address"
              width="100%"
              height="30px"
              onChange={handlePoolTabelSearchBox}
            />
          </SearchBoxContainer>
        </FilterWithSearchStyle>
      </FilterWrapper>
    </VotingPoolContainer>
  );
};

export default VotingPoolBar;
