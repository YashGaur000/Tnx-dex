import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 15px;
`;
const Step = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const VerticalStep = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Circle = styled.div`
  border-radius: 100%;
  width: 25px;
  height: 25px;
  display: flex;
  visibility: visible;
  justify-content: center;
  align-items: center;

  background-color: rgb(1, 6, 8);

  border: 0px;
`;

const Line = styled.div`
  height: 100%;

  border-left: 2px dotted rgb(64, 120, 146);
`;
const Content = styled.div`
  margin-left: 20px;
  display: inline-block;
  margin-bottom: 15px;
  color: #cccccc;
  font-family: Kanit;
  font-size: 15px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
`;

const DepositeInstruction = () => {
  return (
    <StepperContainer>
      <Step>
        <VerticalStep>
          <Circle>1</Circle>
          <Line></Line>
        </VerticalStep>

        <Content>
          <label>
            You are depositing liquidity into a Basic pool Also known as the
            constant product pool or AMM the liquidity in these pools is added
            over the ful price range (0 to ∞) and requires little to no
            maintenance.
          </label>
          <p>
            The pool liquidity is kept in balance using the formula x*y + y³x ≥
            k
          </p>
        </Content>
      </Step>

      <Step>
        <VerticalStep>
          <Circle>2</Circle>
          <Line></Line>
        </VerticalStep>

        <Content>
          <label>
            Fill-in the deposit amounts. We calculate the deposit amounts to
            match the liquidity reserves in the pool. Pools without liquidity
            willuse yourdeposit for iital pool price.
          </label>
        </Content>
      </Step>

      <Step>
        <VerticalStep>
          <Circle>3</Circle>
        </VerticalStep>

        <Content>
          <label>After you deposit you can stake the liquidity</label>
        </Content>
      </Step>
    </StepperContainer>
  );
};

export default DepositeInstruction;
