import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

interface GradientButtonProps {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  color?: string;
  cursor?: string;
  marginTop?: string;
  className?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<
  GradientButtonProps & { theme: DefaultTheme }
>`
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  padding: ${({ padding }) => padding ?? '12px 31.5px'};
  border: ${({ border }) => border ?? '2px solid transparent'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '12px'};
  background: ${({ theme, background }) => background ?? theme.colors.card},
    ${({ theme, background }) => background ?? theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  font-size: ${({ fontSize }) => fontSize ?? '20px'};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme }) => theme.colors.buttonBackground};
  margin-top: ${({ marginTop }) => marginTop ?? '0'};
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

const GradientSpan = styled.span<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  background: ${({ theme }) => theme.colors.buttonBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  transition: background 0.3s ease;
`;

const GradientButton: React.FC<GradientButtonProps> = ({
  width,
  height,
  padding,
  fontSize,
  borderRadius,
  border,
  background,
  color,
  cursor,
  marginTop,
  children,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      border={border}
      background={background}
      color={color}
      cursor={cursor}
      marginTop={marginTop}
    >
      <GradientSpan>{children}</GradientSpan>
    </StyledButton>
  );
};

export default GradientButton;
