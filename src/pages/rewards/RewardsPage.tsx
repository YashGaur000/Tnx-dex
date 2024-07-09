import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json';

const TextWrapper = styled.div`
  text-align: center;
  padding: 200px;
`;

const AnimationWrapper = styled.div`
  width: 300px; // Adjust the size as needed
  margin: 0 auto;
`;

const RewardsPage: React.FC = () => {
  return (
    <>
      <TextWrapper>
        <h1>Coming soon</h1>
        <AnimationWrapper>
          <Lottie animationData={animationData} loop={true} />
        </AnimationWrapper>
      </TextWrapper>
    </>
  );
};

export default RewardsPage;
