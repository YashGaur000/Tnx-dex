import CopyIcon from '../../../../assets/copy.svg';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import {
  FormFieldContainer,
  FormRowWrapper,
} from '../../../Liquidity/ManageLiquidity/styles/LiquidityForm.style';
import {
  CreateFormWrapper,
  CreateMainContainer,
} from '../../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  LockHeaderStyle,
  LockProgressStyle,
} from '../../Styles/CreateLock.style';
import {
  ImageContainer,
  LockCardstyle,
  LockDescriptonTitle,
  LockHeaderTitle,
} from '../../Styles/ManageVetenex.style';
import {
  RelayCardDataContains,
  RelayCardSection,
  RelayIdStatus,
  RelayCheckBoxWrapper,
  RelayStrategyContents,
  LockDropDownBox,
  UnderLineStyle,
} from '../../Styles/Relay.style';
import SelectIcon from '../../../../assets/select.png';
import RelayDeposit from './RelayDeposit';

import { Link } from 'react-router-dom';
import { CheckBoxStyle } from '../../Styles/SplitAndMergelockScreen.style';

const CreateLockRelay = () => {
  return (
    <MainContainerStyle>
      <LockHeaderStyle>
        <LockHeaderTitle fontsize={36}>Relay</LockHeaderTitle>
        <LockDescriptonTitle fontsize={16}>
          Create relay lock here
        </LockDescriptonTitle>
      </LockHeaderStyle>

      <CreateMainContainer>
        <CreateFormWrapper>
          <LockCardstyle>
            <FormFieldContainer>
              <FormRowWrapper>
                <label>Select the Lock you want to deposit</label>

                <UnderLineStyle>
                  <Link to={'/governance/create'}> Create New Lock </Link>
                </UnderLineStyle>
              </FormRowWrapper>
              <div>
                <LockDropDownBox>
                  <label>Your Locks...</label>
                  <div>
                    <ImageContainer width="10" height="5" src={SelectIcon} />
                  </div>
                </LockDropDownBox>
              </div>
              <LockProgressStyle>
                <label>0%</label>
                <label>25%</label>
                <label>50%</label>
                <label>75%</label>
                <label>MAX</label>
              </LockProgressStyle>
            </FormFieldContainer>

            <RelayStrategyContents>
              <LockDescriptonTitle fontsize={14}>
                Relay Strategy
              </LockDescriptonTitle>

              <div>
                <RelayCardSection>
                  <RelayCardDataContains>
                    <LockHeaderTitle fontsize={16}>veTENEX</LockHeaderTitle>
                    <RelayIdStatus>ID 2342</RelayIdStatus>
                  </RelayCardDataContains>
                  <RelayCardDataContains>
                    {' '}
                    <LockDescriptonTitle fontsize={12}>
                      Updated 3 hours ago
                    </LockDescriptonTitle>{' '}
                    <LockDescriptonTitle fontsize={12}>
                      0x2341...35287
                    </LockDescriptonTitle>
                    <ImageContainer width="15px" height="15px" src={CopyIcon} />
                  </RelayCardDataContains>
                </RelayCardSection>
              </div>
              <RelayCheckBoxWrapper>
                <div>
                  <CheckBoxStyle type="checkbox" />
                </div>
                <LockDescriptonTitle fontsize={12}>
                  I understand that by depositing my Lock into a Relay strategy,
                  the Lock unlock date will be extended to 4 years.
                </LockDescriptonTitle>
              </RelayCheckBoxWrapper>
            </RelayStrategyContents>
          </LockCardstyle>
        </CreateFormWrapper>

        <RelayDeposit />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default CreateLockRelay;
