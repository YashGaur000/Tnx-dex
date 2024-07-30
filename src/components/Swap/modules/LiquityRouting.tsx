import {
  LiquityContainer,
  LiquityTitle,
  Step,
  StepCommon,
  StepImage,
  StepLabel,
  StepLine,
  StepperContainer,
} from '../styles/LiquityRouting.style';
import SuiIcon from '../../../assets/sui-logo.png';
import FwdIcon from '../../../assets/fwd-arrow.png';
import TetherIcon from '../../../assets/tether.png';
import SoloIcon from '../../../assets/sol.png';
const LiquityRouting = () => {
  return (
    <LiquityContainer>
      <LiquityTitle>Liquidity Routing</LiquityTitle>
      <StepperContainer>
        <StepCommon>
          <StepImage src={SuiIcon} alt="Icon 1" />
        </StepCommon>
        <StepLine />
        <Step>
          <StepImage src={FwdIcon} alt="Icon 2" />
          <StepLabel>
            1.0%
            <br />
            Volatile
          </StepLabel>
        </Step>
        <StepCommon>
          <StepImage src={TetherIcon} alt="Icon 3" />
        </StepCommon>
        <Step>
          <StepImage src={FwdIcon} alt="Icon 4" />
          <StepLabel>
            0.5%
            <br />
            Concentrated
          </StepLabel>
        </Step>
        <StepCommon>
          <StepImage src={SoloIcon} alt="Icon 5" />
        </StepCommon>
      </StepperContainer>
    </LiquityContainer>
  );
};

export default LiquityRouting;
