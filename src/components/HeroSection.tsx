import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/banner.png'; // Ensure this path is correct or replace with your image path

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5em;
`;

const GradientText = styled.span`
  background: linear-gradient(
    90deg,
    rgba(71, 255, 153, 1) 0%,
    rgba(62, 172, 252, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
`;

const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 15px 30px;
  border: 2px solid;
  border-image: linear-gradient(
    90deg,
    rgba(71, 255, 153, 1) 0%,
    rgba(62, 172, 252, 1) 100%
  );
  border-image-slice: 1;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  font-weight: bold;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(71, 255, 153, 1) 0%,
      rgba(62, 172, 252, 1) 100%
    );
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
`;

const HeroSection: React.FC = () => (
  <HeroContainer>
    <TextContainer>
      <Title>
        Navigating the Future of{' '}
        <GradientText>Decentralized Finance</GradientText>
      </Title>
      <Subtitle>Premier Trading and Liquidity Market Place of DeFi</Subtitle>
      <Description>High APR%, Capital Efficiency, veTENEX, Ve 3,3</Description>
      <Button>Launch dApp</Button>
    </TextContainer>
    <ImageContainer>
      <Image src={BackgroundImage} alt="Background" />
    </ImageContainer>
  </HeroContainer>
);

export default HeroSection;
