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

const LiquityRouting = () => {
  return (
    <LiquityContainer>
      <LiquityTitle>Liquidity Routing</LiquityTitle>
      <StepperContainer>
        <StepCommon>
          <StepImage src="src/assets/sui-logo.png" alt="Icon 1" />
        </StepCommon>
        <StepLine />
        <Step>
          <StepImage src="src/assets/fwd-arrow.png" alt="Icon 2" />
          <StepLabel>
            1.0%
            <br />
            Volatile
          </StepLabel>
        </Step>
        <StepCommon>
          <StepImage src="src/assets/tether.png" alt="Icon 3" />
        </StepCommon>
        <Step>
          <StepImage src="src/assets/fwd-arrow.png" alt="Icon 4" />
          <StepLabel>
            0.5%
            <br />
            Concentrated
          </StepLabel>
        </Step>
        <StepCommon>
          <StepImage src="src/assets/sol-logo.png" alt="Icon 5" />
        </StepCommon>
      </StepperContainer>
    </LiquityContainer>
  );
};

export default LiquityRouting;
