import { GlobalButton } from '../../common';
import {
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenNameWrapper,
} from '../../modal/styles/TokenSelectModal.style';

import {
  SelectCardContainer,
  SelectedDataWrapper,
} from '../styles/VoteSelectedCard.style';
import { Title } from '../styles/VotingPoolBar.style';
import TenexLogo from '../../../assets/Tenex.png';
import { LockDescriptonTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import React, { useState } from 'react';
import { DashboardNavigation } from '../../Dashboard/Index/styles/DashBoard.styled';
import PopupScreen from '../../common/PopupScreen';
import VoteSelectModel from './VoteSelectModel';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import VottingPowerModel from './VottingPowerModel';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';

export interface SelectLockDataType {
  id: string;
  amount: string;
  time: string;
}

interface VoteSelectedCardProps {
  countSelectedItem: number;
  VoteSelectPoolData: LiquidityPoolNewType[];
}
const VoteSelectedCard: React.FC<VoteSelectedCardProps> = ({
  countSelectedItem,
  VoteSelectPoolData,
}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);
  const [selectLockData, setSelectLockData] = useState<SelectLockDataType>({
    id: '416',
    amount: '50.0',
    time: '12 hours',
  }); //Todo: remove static Data when Make Dynamic
  function handleModel(option: string) {
    setModelOpen(option === 'ChangeLock');
    setPopupVisible(true);
  }

  function handleModelHide() {
    setPopupVisible(false);
  }
  const handleSelectToken = (token: SelectLockDataType) => {
    console.log(token);

    setSelectLockData(token);
    setPopupVisible(false);
  };

  return (
    <>
      <SelectCardContainer>
        <TokenItemWithAdressWrapper>
          <TokenItemImage
            src={TenexLogo}
            width={36}
            height={36}
            alt={'wrong'}
          />
          <TokenNameWrapper>
            <SelectedDataWrapper gap={8}>
              <TokenItemData>Lock #{selectLockData.id}</TokenItemData>
              <DashboardNavigation
                fontsize={14}
                onClick={() => handleModel('ChangeLock')}
              >
                Change lock
              </DashboardNavigation>
            </SelectedDataWrapper>
            <LockDescriptonTitle fontsize={12}>
              {selectLockData.amount} TENEX locked for {selectLockData.time}
            </LockDescriptonTitle>
          </TokenNameWrapper>
        </TokenItemWithAdressWrapper>
        <SelectedDataWrapper>
          <Title fontsize="16px">{countSelectedItem} pools selected</Title>
          <GlobalButton
            margin="0px"
            height="40px"
            width="82px"
            onClick={() => handleModel('Vote')}
          >
            Vote
          </GlobalButton>
        </SelectedDataWrapper>
      </SelectCardContainer>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={() => {
          setPopupVisible(false);
        }}
        height="540px"
        width="80%"
        padding="0px"
        scroll="none"
      >
        <PopupWrapper onClick={handleModelHide}></PopupWrapper>
        {isModelOpen ? (
          <VoteSelectModel handleSelectToken={handleSelectToken} />
        ) : (
          <VottingPowerModel
            selectLockData={selectLockData}
            VoteSelectPoolData={VoteSelectPoolData}
          />
        )}
      </PopupScreen>
    </>
  );
};

export default VoteSelectedCard;
