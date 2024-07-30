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
