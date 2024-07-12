import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const TextWrapper = styled.div`
  text-align: center;
  padding: 200px;
`;

const Content = styled.h1`
  text-align: center;
  padding-bottom: 40px;
`;

const AnimationWrapper = styled.div`
  width: 300px; // Adjust the size as needed
  margin: 0 auto;
`;

const CommingSoonComponent: React.FC = () => {
  return (
    <>
      <TextWrapper>
        <Content>Coming soon</Content>
        <AnimationWrapper>
          <Lottie animationData={animationData} loop={true} />
        </AnimationWrapper>
      </TextWrapper>
    </>
  );
};

export default CommingSoonComponent;
