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

  @media (max-width: 1200px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const IconLink = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const BuiltBy = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <IconsContainer>
      <IconLink
        href="https://x.com/Teblox_Labs?s=08"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Icon src={twitterLogo} alt="Twitter Logo" />
      </IconLink>
      <IconLink
        href="https://discord.gg/QHrq54qyb7"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Icon src={discordLogo} alt="Discord Logo" />
      </IconLink>
      <IconLink
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Icon src={telegramLogo} alt="Telegram Logo" />
      </IconLink>
      <IconLink
        href="https://www.youtube.com/@TenExOfficial"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Icon src={youtubeLogo} alt="YouTube Logo" />
      </IconLink>
    </IconsContainer>
    <BuiltBy>Built by TeBlox Labs</BuiltBy>
  </FooterContainer>
);

export default Footer;
