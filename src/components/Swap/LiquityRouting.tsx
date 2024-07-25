import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

const LiquityContainer = styled.div<{ theme: DefaultTheme }>`
  background: linear-gradient(90deg, #18264C 0%, #1F305F 100%);
  border-radius: 24px;
  padding: 40px;
  width: 100%; 
  max-width:600px
  height: 204px; 
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const LiquityTitle = styled.h2`
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
  padding-left: 20px;
`;

const StepperContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 81px;
  margin: 0 10px;
`;
const StepCommon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1 1 81px;
  padding-bottom: 49px;
`;

const StepImage = styled.img`
  width: 24px;
  height: 24px;
  z-index: 10;
`;

const StepLabel = styled.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  line-height: 20.93px;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

const StepLine = styled.div`
  position: absolute;
  top: 16%;
  left: 10%;
  width: 100%;
  max-width: 80%;
  border-top: 1px dotted #ffffff;
  z-index: 0;
`;

const LiquityRouting = () => {
  return (
    <LiquityContainer>
      <LiquityTitle>Liquidity Routing</LiquityTitle>
      <StepperContainer>
        <StepCommon>
          <StepImage src="src/assets/Group392.png" alt="Icon 1" />
        </StepCommon>
        <StepLine />
        <Step>
          <StepImage src="src/assets/Group922.png" alt="Icon 2" />
          <StepLabel>
            1.0%
            <br />
            Volatile
          </StepLabel>
        </Step>
        <StepCommon>
          <StepImage src="src/assets/Vector.png" alt="Icon 3" />
        </StepCommon>
        <Step>
          <StepImage src="src/assets/Group922.png" alt="Icon 4" />
          <StepLabel>
            0.5%
            <br />
            Concentrated
          </StepLabel>
        </Step>

        <StepCommon>
          <StepImage src="src/assets/Group393.png" alt="Icon 5" />
        </StepCommon>
      </StepperContainer>
    </LiquityContainer>
  );
};

export default LiquityRouting;
