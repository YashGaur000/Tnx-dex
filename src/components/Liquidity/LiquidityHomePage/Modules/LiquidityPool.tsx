import LiquidityHeroSection from './LiquidityHeroSection';
import FilterContainer from './FilterContainer';
import LiquidityPoolTable from './LiquidityPoolTable';
import { LiquidityHeaderTitle } from '../styles/Liquiditypool.style';
import { useLiquidityPoolData } from '../../../../hooks/useLiquidityPoolData';

//type SortableKeys = keyof LiquidityPoolNewType;

const LiquidityPool = () => {
  const { loading, error, data: poolData } = useLiquidityPoolData();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  // const [sortedColumn, setSortedColumn] = useState<SortableKeys>('apr');
  // const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  // const [filteredData, setFilteredData] = useState<PoolDataProps[]>(POOL_DATA);

  // const handleSelectedFilterItem = (selectItem: string) => {
  //   const newFilterData = POOL_DATA.filter((item) => {
  //     return item.liquidityType === selectItem || selectItem === 'All Pools';
  //   });
  //   setFilteredData(newFilterData);
  // };

  // const handleSearchFeatures = (item: string) => {
  //   const searchItem = item.toLowerCase();
  //   console.log(searchItem);

  //   const newfilterData = POOL_DATA.filter((item) => {
  //     return item.pair.toLowerCase().includes(searchItem);
  //   });

  //   setFilteredData(newfilterData);
  // };

  // const handleSortedFeatures = (item: SortableKeys) => {
  //   const isAsc = item === sortedColumn && sortDirection === 'asc';
  //   const newDirection = isAsc ? 'desc' : 'asc';

  //   const sortedArray = [...filteredData].sort((a, b) => {
  //     if (a[item] < b[item]) return newDirection === 'asc' ? -1 : 1;
  //     if (a[item] > b[item]) return newDirection === 'asc' ? 1 : -1;
  //     return 0;
  //   });

  //   setFilteredData(sortedArray);
  //   setSortedColumn(item);
  //   setSortDirection(newDirection);
  // };

  return (
    <>
      <LiquidityHeaderTitle fontSize={36}>Liquidity</LiquidityHeaderTitle>
      <LiquidityHeroSection />
      <FilterContainer
      //handleSelectedFilterItem={handleSelectedFilterItem}
      //handleSearchFeatures={handleSearchFeatures}
      />
      {poolData && (
        <LiquidityPoolTable
          //handleSortedFeatures={handleSortedFeatures}
          sortedData={poolData}
        />
      )}
    </>
  );
};

export default LiquidityPool;
