import { useEffect, useState } from 'react';
import useNftData from '../../../hooks/useUserNFTs';
import useVoterData from '../../../hooks/useVoterData';
import VoteBanner from './VoteBanner';
import VotePoolTable from './VotePoolTable';
import VotingPoolBar from './VotingPoolBar';
import { Nft } from '../../../types/VotingEscrow';

import { LiquidityTableWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import PageLoader from '../../common/PageLoader';
import { VoteDataType } from '../../../types/VoteData';
type SortField =
  | 'totalFeesUSD'
  | 'totalBribesUSD'
  | 'totalVolumeUSD'
  | 'totalValueLocked';
type SortOrder = 'asc' | 'desc';
const ITEMS_PER_PAGE = 25;
const VoteHomeSection = () => {
  const nftData = useNftData();
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortedData, setSortedData] = useState<VoteDataType[]>([]);
  const [filterData, setFilterData] = useState<VoteDataType[]>([]);
  const [UserNft, setUserNft] = useState<Nft[]>([]);
  const [islockPresent, setLockPresent] = useState<boolean>(false);
  const { voteData, Loading, error } = useVoterData();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const filterNFT = nftData.filter((item) => {
      return !item.votingStatus;
    });
    setLockPresent(filterNFT.length > 0);
    setUserNft(filterNFT);
  }, [nftData]);

  useEffect(() => {
    if (voteData) {
      const sortedingData = voteData.sort((a, b) => {
        const totalRewardsA = Number(a.totalValueLocked);
        const totalRewardsB = Number(b.totalValueLocked);

        return totalRewardsA - totalRewardsB;
      });
      setSortedData(sortedingData);
      setFilterData(sortedingData);
    }
  }, [voteData]);

  useEffect(() => {
    setTotalPages(Math.ceil(sortedData.length / ITEMS_PER_PAGE));
    setCurrentPage(1);
  }, [sortedData]);

  const handleFilterVoteData = (selectItem: string) => {
    if (!voteData) return;

    const newFilterData = voteData.filter((item) => {
      const totalRewards =
        Number(item.totalBribesUSD) + Number(item.totalFeesUSD);

      if (selectItem === 'All Pools') {
        return true;
      } else if (selectItem === 'Most Rewarded') {
        return totalRewards > 100;
      } else if (selectItem === 'Least Rewarded') {
        return totalRewards <= 100;
      }

      return false;
    });

    let sortedData = [];

    if (selectItem === 'Most Rewarded') {
      sortedData = newFilterData.sort((a, b) => {
        const totalRewardsA = Number(a.totalBribesUSD) + Number(a.totalFeesUSD);
        const totalRewardsB = Number(b.totalBribesUSD) + Number(b.totalFeesUSD);

        return totalRewardsB - totalRewardsA;
      });
    } else if (selectItem === 'Least Rewarded') {
      sortedData = newFilterData.sort((a, b) => {
        const totalRewardsA = Number(a.totalBribesUSD) + Number(a.totalFeesUSD);
        const totalRewardsB = Number(b.totalBribesUSD) + Number(b.totalFeesUSD);

        return totalRewardsA - totalRewardsB;
      });
    } else {
      sortedData = newFilterData.sort((a, b) => {
        const totalRewardsA = Number(a.totalVolumeUSD);
        const totalRewardsB = Number(b.totalVolumeUSD);

        return totalRewardsA - totalRewardsB;
      });
    }

    console.log(sortedData);

    if (sortedData.length > 0) {
      setSortedData(sortedData);
      setFilterData(sortedData);
    } else {
      console.log('No pools match the selected filter.');
      setSortedData([]);
      setFilterData([]);
    }
  };

  const handleSearchVoteData = (item: string) => {
    const searchItem = item.toLowerCase();

    const newfilterData = filterData.filter((item) => {
      return item.name.toLowerCase().includes(searchItem);
    });

    if (newfilterData) {
      setSortedData(newfilterData);
    }
  };

  const handleSort = (field: SortField) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    console.log('isAsc:', isAsc);
    console.log('field:', field);

    // Update the current sort field and order
    setSortField(field);
    setSortOrder(isAsc ? 'desc' : 'asc');

    const sorted = [...sortedData].sort((a, b) => {
      // Parse decimal values if the field is "amount", else compare as usual
      const valA = field ? a[field] : a[field];
      const valB = field ? b[field] : b[field];

      if (valA < valB) return isAsc ? 1 : -1;
      if (valA > valB) return isAsc ? -1 : 1;
      return 0;
    });
    console.log('sorted', sorted);
    setSortedData(sorted);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevpage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (Loading) {
    return <PageLoader />;
  }

  if (!Loading && voteData.length <= 0)
    return (
      <LiquidityTableWrapper>
        You are not Eligible for Vote
      </LiquidityTableWrapper>
    );
  if (error) return 'error! Fetching Data';

  return (
    <>
      <VoteBanner />
      <VotingPoolBar
        handleFilterVoteData={handleFilterVoteData}
        handleSearchVoteData={handleSearchVoteData}
      />
      <VotePoolTable
        islockPresent={islockPresent}
        UserNft={UserNft}
        sortedData={paginatedData}
        handleSort={handleSort}
        handleNextPage={handleNextPage}
        handlePrevpage={handlePrevpage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};

export default VoteHomeSection;
