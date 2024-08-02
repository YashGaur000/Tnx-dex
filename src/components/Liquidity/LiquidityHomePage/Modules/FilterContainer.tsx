import styled from 'styled-components';
import SearchIcon from '../../../../assets/search-icon.png';
import { Input } from '../../../common';
const P = styled.p`
  font-size: 20px;
  margin-top: 40px;
`;
const Main = styled.main`
  display: flex;
  justify-content: space-between;

  align-items: center;
  margin-top: 20px;
`;
const Button = styled.button`
  background: transparent;
  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
  border: 1px solid #b8b8b899;
  padding: 6px 15px;
  border-radius: 10px;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 300;
  line-height: 23.92px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  width: 50%;

  overflow-x: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b8b8b899;
    border-radius: 10px;
    min-height: 10px;
  }

  @media screen and (max-width: 1000px) {
    width: 30%;
  }
`;
const Select = styled.select`
  background: transparent;
  color: white;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
`;
const FilterWithSearchStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const SearchBoxContainer = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 10px;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
`;
const FilterContainer = () => {
  const ButtonData = [
    'All Posts',
    'Stable',
    'Volatile',
    'Concentrated',
    'Low TVL',
  ];
  return (
    <section>
      <P>Liquidity Pools</P>
      <Main>
        <ButtonContainer>
          {ButtonData.map((item, key) => (
            <Button key={key}>{item}</Button>
          ))}
        </ButtonContainer>
        <FilterWithSearchStyle>
          <Select>
            <option>Active</option>
            <option>New</option>
            <option>Participant</option>
            <option>Others</option>
          </Select>
          <SearchBoxContainer>
            <img src={SearchIcon} />
            <Input type="text" placeholder="Search by symbol or address" />
          </SearchBoxContainer>
        </FilterWithSearchStyle>
      </Main>
    </section>
  );
};

export default FilterContainer;
