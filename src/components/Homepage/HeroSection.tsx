import React from 'react';
import styled from 'styled-components';
// import BackgroundImage from '../../assets/banner.svg';
import { useAccount } from '../../hooks/useAccount';
import { useNavigate } from 'react-router-dom';
import { DefaultTheme } from '../../styles/Theme';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json';
import { LaunchDappButton, LaunchDappSpan } from '../common';

const HeroContainer = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  padding: 0px 40px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1200px) {
    padding: 20px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 50%;

  @media (max-width: 1200px) {
    padding: 0px;
    max-width: 30%;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding: 0px;
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
    max-width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1<{ theme: DefaultTheme }>`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  letter-spacing: 0.02em;
  text-align: left;

  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5em;

  @media (max-width: 1200px) {
    font-size: 38px;
  }

  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const GradientText = styled.span<{ theme: DefaultTheme }>`
  font-size: 65px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 40px;
  letter-spacing: 0.02em;
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 900px) {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    font-size: 43px;
  }
`;

export const Description = styled.p<{ theme: DefaultTheme; align: string }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// const Image = styled.img`
//   width: 810px;
//   height: 742px;
//   top: 206px;
//   left: 762px;
//   border-radius: 20px 0px 0px 0px;
//   opacity: 0px;
//   height: fit-content;

//   @media (max-width: 1200px) {
//     width: 700px;
//   }

//   @media (max-width: 1024px) {
//     width: 600px;
//   }

//   @media (max-width: 900px) {
//     max-width: 100%;
//   }
// `;

const HeroSection: React.FC = () => {
  const { isConnected } = useAccount();
  const isconnected = isConnected;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/swap');
  };

  return (
    <HeroContainer>
      <TextContainer>
        <Title>
          Navigating the Future of <GradientText>Decentralized</GradientText>
          <br />
          <GradientText>Finance</GradientText>
        </Title>
        <Description align="left">
          Premier Trading and Liquidity Market Place of DeFi
        </Description>
        <LaunchDappButton
          isconnected={isconnected.toString()}
          onClick={handleButtonClick}
        >
          <LaunchDappSpan isconnected={isconnected.toString()}>
            Launch dApp
          </LaunchDappSpan>
        </LaunchDappButton>
      </TextContainer>
      {/* <ImageContainer>
        <Image src={BackgroundImage} alt="Background" />
      </ImageContainer> */}
      <ImageContainer>
        <Lottie animationData={animationData} loop={true} />
      </ImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
