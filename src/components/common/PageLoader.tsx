import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json';
import { DefaultTheme } from '../../styles/Theme';

const TextWrapper = styled.div`
  text-align: center;
  padding: 100px;
  width: 100%;
`;

const Content = styled.h1<{ theme: DefaultTheme }>`
  text-align: center;
  padding-top: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 20px;
`;

const AnimationWrapper = styled.div`
  width: 200px; // Adjust the size as needed
  margin: 0 auto;
`;

const PageLoader: React.FC = () => {
  return (
    <>
      <TextWrapper>
        <AnimationWrapper>
          <Lottie animationData={animationData} loop={true} />
        </AnimationWrapper>
        <Content>Loading data...</Content>
      </TextWrapper>
    </>
  );
};

export default PageLoader;
