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
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 71.76px;
  letter-spacing: 0.02em;
  text-align: left;

  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5em;
`;

const GradientText = styled.span`
  font-size: 65px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 40px;
  letter-spacing: 0.02em;
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

const Description = styled.p`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 12px 31.5px 12px 31.5px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const GradientSpan = styled.span`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  transition: background 0.3s ease;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

const Image = styled.img`
  width: 810px;
  height: 742px;
  top: 206px;
  left: 762px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  height: fit-content;
`;

const HeroSection: React.FC = () => (
  <HeroContainer>
    <TextContainer>
      <Title>
        Navigating the Future of{' '}
        <GradientText>Decentralized Finance</GradientText>
      </Title>
      <Description>
        Premier Trading and Liquidity Market Place of DeFi
      </Description>
      <Button>
        <GradientSpan>Launch dApp</GradientSpan>
      </Button>
    </TextContainer>
    <ImageContainer>
      <Image src={BackgroundImage} alt="Background" />
    </ImageContainer>
  </HeroContainer>
);

export default HeroSection;
