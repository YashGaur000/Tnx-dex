import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

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
  smFontSize?: number;
  smMargin?: string;
  lineheight?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<
  GradientButtonProps & { theme: DefaultTheme; lineheight?: string }
>`
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  padding: ${({ padding }) => padding ?? '12px 31.5px'};
  border: ${({ border }) => border ?? '2px solid transparent'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '12px'};
  background: ${({ theme, background }) => background ?? theme.colors.cardLight},
    ${({ theme, background }) => background ?? theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  font-size: ${({ fontSize }) => fontSize ?? '20px'};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ lineheight }) => lineheight ?? '29.9px'};
  font-family: ${({ theme }) => theme.fonts.main};
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme, color }) => color ?? theme.colors.buttonBackground};
  margin-top: ${({ marginTop }) => marginTop ?? '0px'};
  opacity: 1;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: ${({ smFontSize }) => smFontSize ?? 18}px;
    margin: ${({ smMargin }) => smMargin ?? '10px'};
  }
`;

// export const GradientSpan = styled.span<{
//   fontSize?: number;
//   Color?: string;
//   isactive?: boolean;
//   theme: DefaultTheme;
// }>`
//   color: ${({ Color }) => Color};
//   font-size: ${({ fontSize }) => fontSize}px;
//   font-family: ${({ theme }) => theme.fonts.main};
//   background: ${({ isactive, theme }) =>
//     isactive ? 'black' : theme.colors.buttonBackground};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: inline-block;
//   transition: background 0.3s ease;
// `;

// export const GradientSpan = styled.span<{
//   fontSize?: number;
//   isactive?: boolean;
//   theme: DefaultTheme;
// }>`
//   font-size: ${({ fontSize }) => fontSize}px;
//   font-family: ${({ theme }) => theme.fonts.main};
//   border : ${({ isactive }) =>
//     isactive ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)' : 'transparent'};
//   background: ${({ isactive }) =>
//     isactive ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)' : 'transparent'};
//   -webkit-background-clip: text;
//   // -webkit-text-fill-color: ${({ isactive }) => (isactive ? 'transparent' : 'white')};
//   // background-clip: text; // For cross-browser support
//   // -webkit-text-fill-color: ${({ isactive }) => (isactive ? 'transparent' : 'white')};
//   // transition: background 0.3s ease;
// `;

export const GradientSpan = styled.span<{
  fontSize?: number;
  isactive?: boolean;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  background: ${({ isactive }) =>
    isactive
      ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)'
      : 'white'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ isactive }) =>
    isactive ? 'transparent' : 'white'};
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
  lineheight,
  smFontSize,
  smMargin,
  children,
}: GradientButtonProps) => {
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
      lineheight={lineheight}
      smMargin={smMargin}
      smFontSize={smFontSize}
    >
      <GradientSpan>{children}</GradientSpan>
    </StyledButton>
  );
};

export default GradientButton;
