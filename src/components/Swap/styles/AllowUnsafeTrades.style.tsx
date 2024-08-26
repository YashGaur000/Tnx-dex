import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const AllowUnsafeWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: justify;
  margin-bottom: 20px;
  margin-left: 11px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentWrapper = styled.div``;

export const AllowUnsafeListDes = styled.div<{ theme: DefaultTheme }>`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.textGreyColor};
  margin-bottom: 20px;
  position: relative;
  text-align: justify;
  padding-left: 30px;
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
  border-radius: 10px;
  cursor: pointer;
`;
