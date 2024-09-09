import TenexIcon from '../../../assets/Tenex.png';
import {
  Column,
  LockDetails,
  LockIcon,
  LockImg,
  LockInfo,
  LockInfoDes,
  LockItemContainer,
  LockListContainer,
  PaginationContainer,
  LockInfoAction,
  LockInfoCheck,
  LockInfoText,
  LockInfoTextValue,
} from '../Styles/VeTenexTable.style';

const LockItem = () => (
  <LockItemContainer>
    <LockDetails>
      <LockIcon>
        <LockImg src={TenexIcon} alt="Lock Icon" />
      </LockIcon>
      <LockInfo>
        <LockInfoDes fontSize={16} lineheight={23.92}>
          Lock #7242
        </LockInfoDes>
        <LockInfoDes fontSize={12} lineheight={17.94}>
          50.0 TENEX locked for 11 hours
        </LockInfoDes>
        <LockInfoCheck>
          <LockInfoAction>Increase</LockInfoAction>
          <LockInfoAction>Extend</LockInfoAction>
          <LockInfoAction>Merge</LockInfoAction>
          <LockInfoAction>Transfer</LockInfoAction>
        </LockInfoCheck>
      </LockInfo>
    </LockDetails>
    <Column>
      <LockInfoText>Voting Power</LockInfoText>
      <LockInfoTextValue>654.00</LockInfoTextValue>
    </Column>
    <Column>
      <LockInfoText>Emissions</LockInfoText>
      <LockInfoTextValue>654.00</LockInfoTextValue>
    </Column>
  </LockItemContainer>
);

const VeTenexTable = () => (
  <LockListContainer>
    {Array.from({ length: 5 }).map((_, index) => (
      <LockItem key={index} />
    ))}
    <PaginationContainer>
      <button disabled>Prev</button>
      <button>Next</button>
    </PaginationContainer>
  </LockListContainer>
);

export default VeTenexTable;
