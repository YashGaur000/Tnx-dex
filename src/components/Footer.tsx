import React from 'react';
import styled from 'styled-components';
import twitterLogo from '../assets/twitter-logo.png';
import discordLogo from '../assets/discord-logo.png';
import telegramLogo from '../assets/telegram-logo.png';
import youtubeLogo from '../assets/youtube-logo.png';
import { DefaultTheme } from '../styles/Theme';

const FooterContainer = styled.footer<{ theme: DefaultTheme }>`
  width: 100%;
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

const BuiltBy = styled.div<{ theme: DefaultTheme }>`
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
        href="https://x.com/TenEx_Official"
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
        href="https://t.me/+Bq6Csh-d7pw1NzM9"
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
    <BuiltBy>Built by Tenex Finance</BuiltBy>
  </FooterContainer>
);

export default Footer;
