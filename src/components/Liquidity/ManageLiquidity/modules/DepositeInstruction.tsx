import React from 'react';
import styled from 'styled-components';

// Define the type for the data prop
interface Data {
  step: number;
  descriptions: string[];
}

interface DepositeInstructionProps {
  data: Data[];
}

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
  justify-content: center;
  align-items: center;
  background-color: rgb(1, 6, 8);
  border: 0px;
  color: white;
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

const DepositeInstruction: React.FC<DepositeInstructionProps> = ({ data }) => {
  return (
    <StepperContainer>
      {data.map((item, index) => (
        <Step key={index}>
          <VerticalStep>
            <Circle>{item.step}</Circle>
            {index < data.length - 1 && <Line />}
          </VerticalStep>
          <Content>
            {item.descriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </Content>
        </Step>
      ))}
    </StepperContainer>
  );
};

export default DepositeInstruction;
