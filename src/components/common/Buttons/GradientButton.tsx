import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

interface GradientButtonProps {
  width?: string;
  height?: string;
  padding?: string;
  fontsize?: string;
  borderradius?: string;
  border?: string;
  background?: string;
  color?: string;
  cursor?: string;
  margintop?: string;
  className?: string;
  smfontsize?: number;
  smmargin?: string;
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
  border-radius: ${({ borderradius }) => borderradius ?? '12px'};
  background: ${({ theme, background }) => background ?? theme.colors.cardLight},
    ${({ theme, background }) => background ?? theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  font-size: ${({ fontsize }) => fontsize ?? '20px'};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ lineheight }) => lineheight ?? '16.9px'};
  font-family: ${({ theme }) => theme.fonts.main};
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme, color }) => color ?? theme.colors.buttonBackground};
  margin-top: ${({ margintop }) => margintop ?? '0px'};
  opacity: 1;
  transition:
    transform 0.3s,
    background-color 0.3s,
    border 0.3s,
    padding 0.3s;

  &:hover {
    animation: pulse 1s infinite;
    box-shadow: none;
    outline: none;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  span:hover {
    animation: none;
    transition: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: ${({ smfontsize }) => smfontsize ?? 18}px;
    margin: ${({ smmargin }) => smmargin ?? '10px'};
  }
`;

// export const GradientSpan = styled.span<{
//   fontsize?: number;
//   Color?: string;
//   isactive?: boolean;
//   theme: DefaultTheme;
// }>`
//   color: ${({ Color }) => Color};
//   font-size: ${({ fontsize }) => fontsize}px;
//   font-family: ${({ theme }) => theme.fonts.main};
//   background: ${({ isactive, theme }) =>
//     isactive ? 'black' : theme.colors.buttonBackground};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: inline-block;
//   transition: background 0.3s ease;
// `;

// export const GradientSpan = styled.span<{
//   fontsize?: number;
//   isactive?: boolean;
//   theme: DefaultTheme;
// }>`
//   font-size: ${({ fontsize }) => fontsize}px;
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
  fontsize?: number;
  isactive?: boolean;
}>`
  font-size: ${({ fontsize }) => fontsize}px;
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
  fontsize,
  borderradius,
  border,
  background,
  color,
  cursor,
  margintop,
  lineheight,
  smfontsize,
  smmargin,
  children,
}: GradientButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      padding={padding}
      fontsize={fontsize}
      borderradius={borderradius}
      border={border}
      background={background}
      color={color}
      cursor={cursor}
      margintop={margintop}
      lineheight={lineheight}
      smmargin={smmargin}
      smfontsize={smfontsize}
    >
      <GradientSpan>{children}</GradientSpan>
    </StyledButton>
  );
};

export default GradientButton;
