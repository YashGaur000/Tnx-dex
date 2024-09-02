import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const AllowUnsafeWrapper = styled.div<{
  display?: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: linear-gradient(180deg, #273762 0%, #2a3e75 100%);

  border-radius: 12px;
  padding: 20px;
  width: 360px;
  height: 118px;
  top: 488px;
  left: 460px;
  gap: 0px;
  opacity: 0px;

  margin: 32px 40px;
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: justify;
  margin-bottom: 10px;
  margin-left: 11px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentWrapper = styled.div``;

export const AllowUnsafeListDes = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  opacity: 0.8;
  margin-bottom: 15px;
  width: 266px;
  position: relative;
  text-align: justify;
  padding-left: 12px;
`;
export const AllowUnsafeAlign = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectToggleUnsafe = styled.button<{ theme: DefaultTheme }>`
  width: 55px;
  height: 32px;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: none;
  margin-top: 27px;
  margin-left: 6px;
  border-radius: 10px;
  cursor: pointer;
`;
