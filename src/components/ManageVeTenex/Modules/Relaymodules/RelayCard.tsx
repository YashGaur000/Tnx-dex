import { GradientButton } from '../../../common';

import {
  ImageContainer,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../Styles/ManageVetenex.style';
import {
  RelayCardDataContains,
  RelayCardSection,
  RelayIdStatus,
} from '../../Styles/Relay.style';
import CopyIcon from '../../../../assets/copy.svg';
import { useNavigate } from 'react-router-dom';
import { RelayData } from '../../../../constants/RelayData';
import { TableColumn } from '../../../common/TableStyled';

interface RelayCardProps {
  Relaydata: RelayData;
}

const RelayCard: React.FC<RelayCardProps> = ({ Relaydata }) => {
  const Navigate = useNavigate();

  const handleDepositeLock = () => {
    Navigate('/governance/relay/create');
  };
  return (
    <tr>
      <TableColumn>
        <RelayCardSection>
          <RelayCardDataContains>
            <LockHeaderTitle fontSize={16}>
              {Relaydata.relay.name}
            </LockHeaderTitle>
            <RelayIdStatus>ID {Relaydata.relay.id}</RelayIdStatus>
          </RelayCardDataContains>

          <RelayCardDataContains>
            <LockDescriptonTitle fontSize={12}>
              {Relaydata.relay.updated}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontSize={12}>
              {Relaydata.relay.address}
            </LockDescriptonTitle>
            <ImageContainer width="15px" height="15px" src={CopyIcon} />
          </RelayCardDataContains>
        </RelayCardSection>
      </TableColumn>
      <TableColumn>
        <LockHeaderTitle fontSize={12}>
          {Relaydata.votingPower.value} ~ {Relaydata.votingPower.percentage}
        </LockHeaderTitle>
      </TableColumn>
      <TableColumn>
        <LockHeaderTitle fontSize={12}>{Relaydata.apr}</LockHeaderTitle>
      </TableColumn>
      <TableColumn>
        <div onClick={handleDepositeLock}>
          <GradientButton
            borderRadius="6px"
            color="#ffffff"
            padding="0px 10px 30px"
            border="1px solid transparent"
            fontSize="12"
            width="86"
            height="22px"
          >
            Deposit Lock
          </GradientButton>
        </div>
      </TableColumn>
    </tr>
  );
};

export default RelayCard;
