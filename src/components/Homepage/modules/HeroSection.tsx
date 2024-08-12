import React from 'react';
// import BackgroundImage from '../../assets/banner.svg';
import { useAccount } from '../../../hooks/useAccount';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../../assets/animation.json';
import { LaunchDappButton, LaunchDappSpan } from '../../common';
import {
  Description,
  GradientText,
  HeroContainer,
  ImageContainer,
  TextContainer,
  Title,
} from '../styles/HeroSection.style';

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
