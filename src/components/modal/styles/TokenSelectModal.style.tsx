import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const ModalWrapper = styled.div<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const TokenListsWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 10px;
`;
export const ModalContent = styled.div<{ theme: DefaultTheme }>`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: 20px;
  width: 550px;
  max-height: 540px;

  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const ScrollContainer = styled.div<{
  theme: DefaultTheme;
  height?: string;
}>`
  width: 100%;
  overflow-y: auto;
  height: ${({ height }) => height ?? '350px'};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
    width: 6px;
    margin-bottom: 20px;
    background: ${({ theme }) => theme.colors.swapIconBackground};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.bordercolor};
    border-radius: 10px;
    margin-right: 5px;
  }
`;

export const SearchInput = styled.input<{
  theme: DefaultTheme;
  marginbottom?: string;
}>`
  width: 100%;
  padding: 8px;
  margin-bottom: ${({ marginbottom }) => marginbottom ?? '10px'};
  border: none;
  background: transparent;
  border-radius: 21px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  align-items: center;
  &::placeholder {
    color: ${({ theme }) => theme.colors.greyDark};
    padding-left: 10px;
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const TokenList = styled.ul<{ theme: DefaultTheme }>`
  list-style: none;

  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 0px 20px 0px 10px;

  gap: 8px;
`;

export const TokenItemWithAdressWrapper = styled.div`
  display: flex;

  gap: 16px;
  justify-content: center;
  height: 42px;
`;
export const TokenItem = styled.li<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;

  padding: 5px;
  justify-content: space-between;
  cursor: pointer;
  line-height: 23.92px;
  color: ${({ theme }) => theme.colors.textGreyColor};
  &:hover {
    background: ${({ theme }) => theme.colors.cardLight};
    border-radius: 8px;
  }
`;
export const TokenItemImage = styled.img<{
  theme: DefaultTheme;
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: 50%;
  object-fit: cover;
`;
export const TokenNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TokenItemData = styled.div<{
  theme: DefaultTheme;
  fontSize?: number;
}>`
  font-size: ${({ fontSize }) => fontSize ?? '16'}px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  text-align: right;
`;

export const SearchWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 10px 16px;
  margin: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};
  background: transparent;
  border-radius: 12px;
  height: 40px;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderTokenContent = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
`;

export const HeaderleftContent = styled.span<{ theme: DefaultTheme }>`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const HeaderRightContent = styled.span<{ theme: DefaultTheme }>`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const LockTokenContainer = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: ${({ padding }) => padding ?? '0px'};
`;
