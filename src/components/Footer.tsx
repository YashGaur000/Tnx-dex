import React from 'react';
import styled from 'styled-components';
import twitterLogo from '../assets/twitter-logo.png'; // Replace with the actual path to your image
import discordLogo from '../assets/discord-logo.png'; // Replace with the actual path to your image
import telegramLogo from '../assets/telegram-logo.png'; // Replace with the actual path to your image
import youtubeLogo from '../assets/youtube-logo.png'; // Replace with the actual path to your image

const FooterContainer = styled.footer`
  width: 100%;
  padding: 140px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const BuiltBy = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text};
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <IconsContainer>
      <Icon src={twitterLogo} alt="Twitter Logo" />
      <Icon src={discordLogo} alt="Discord Logo" />
      <Icon src={telegramLogo} alt="Telegram Logo" />
      <Icon src={youtubeLogo} alt="YouTube Logo" />
    </IconsContainer>
    <BuiltBy>Built by TeBlox Labs</BuiltBy>
  </FooterContainer>
);

export default Footer;
