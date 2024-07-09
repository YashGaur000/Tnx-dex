import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/banner.svg'; // Ensure this path is correct or replace with your image path
import { useAccount } from '../../hooks/useAccount';
import { useNavigate } from 'react-router-dom';
import { DefaultTheme } from '../../styles/Theme';

const HeroContainer = styled.section<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1200px) {
    padding: 30px;
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
`;

export const Description = styled.p<{ theme: DefaultTheme; align: string }>`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

const StyledButton = styled.button<{
  isconnected: string;
  theme: DefaultTheme;
}>`
  padding: 12px 31.5px 12px 31.5px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
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

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;

const GradientSpan = styled.span<{ isconnected: string; theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  background: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
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

  @media (max-width: 900px) {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 810px;
  height: 742px;
  top: 206px;
  left: 762px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  height: fit-content;

  @media (max-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

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
        <StyledButton
          isconnected={isconnected.toString()}
          onClick={handleButtonClick}
        >
          <GradientSpan isconnected={isconnected.toString()}>
            Launch dApp
          </GradientSpan>
        </StyledButton>
      </TextContainer>
      <ImageContainer>
        <Image src={BackgroundImage} alt="Background" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
