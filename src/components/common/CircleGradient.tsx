import React from 'react';
import styled from 'styled-components';
import circle from '../../assets/circle_gradient.svg';

interface ImageWrapperProps {
  top: string;
  left: string;
}

const ImageWrapper = styled.img<ImageWrapperProps>`
  z-index: -1;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

interface CircleGradientProps {
  top: string;
  left: string;
}

export const CircleGradient: React.FC<CircleGradientProps> = ({
  top,
  left,
}) => {
  return <ImageWrapper src={circle} alt="gradient" top={top} left={left} />;
};
