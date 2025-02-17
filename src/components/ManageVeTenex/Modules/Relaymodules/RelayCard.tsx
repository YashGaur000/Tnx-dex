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
  DepositeLockButtonWrapper,
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
            <LockHeaderTitle fontsize={16}>
              {Relaydata.relay.name}
            </LockHeaderTitle>
            <RelayIdStatus>ID {Relaydata.relay.id}</RelayIdStatus>
          </RelayCardDataContains>

          <RelayCardDataContains>
            <LockDescriptonTitle fontsize={12}>
              {Relaydata.relay.updated}
            </LockDescriptonTitle>
            <LockDescriptonTitle fontsize={12}>
              {Relaydata.relay.address}
            </LockDescriptonTitle>
            <ImageContainer width="15px" height="15px" src={CopyIcon} />
          </RelayCardDataContains>
        </RelayCardSection>
      </TableColumn>
      <TableColumn>
        <LockHeaderTitle fontsize={12}>
          {Relaydata.votingPower.value} ~ {Relaydata.votingPower.percentage}
        </LockHeaderTitle>
      </TableColumn>
      <TableColumn>
        <LockHeaderTitle fontsize={12}>{Relaydata.apr}</LockHeaderTitle>
      </TableColumn>
      <TableColumn>
        <DepositeLockButtonWrapper onClick={handleDepositeLock}>
          <GradientButton
            borderradius="6px"
            color="#ffffff"
            padding="10px"
            lineheight="0px"
            border="1.5px solid transparent"
            fontsize="12px"
            width="95px"
            height="26px"
            smfontsize={12}
            smmargin="0px"
          >
            Deposit Lock
          </GradientButton>
        </DepositeLockButtonWrapper>
      </TableColumn>
    </tr>
  );
};

export default RelayCard;
