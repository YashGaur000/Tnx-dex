import React from 'react';

interface CustomDotProps {
  cx?: number | string;
  cy?: number | string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
}

export const CustomDot: React.FC<CustomDotProps> = ({ cx, cy }) => {
  if (cx === undefined || cy === undefined) {
    return null;
  }
  return <circle cx={cx} cy={cy} r={3} fill="url(#colorDot)" stroke="none" />;
};
