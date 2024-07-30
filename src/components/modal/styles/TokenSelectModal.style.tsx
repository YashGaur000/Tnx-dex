import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const ModalContent = styled.div<{ theme: DefaultTheme }>`
  background: linear-gradient(90deg, #18264c 0%, #1f305f 100%);
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  max-height: 80vh;
`;

export const SearchInput = styled.input<{ theme: DefaultTheme }>`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 21px;
  color: grey;
  background: linear-gradient(90deg, #18264c 0%, #1f305f 100%);
  padding: 12px 20px 12px 40px;
`;

export const TokenList = styled.ul<{ theme: DefaultTheme }>`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 60vh;
  text-align: left;
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
    border-radius: 21px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #16c062 0%, #3eacfc 100%);
    border-radius: 10px;
  }
`;

export const TokenItem = styled.li<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  line-height: 23.92px;
  color: ${({ theme }) => theme.colors.textGreyColor};
  &:hover {
    background: grey;
  }

  img {
    width: 35px;
    height: 36px;
    border-radius: 30px;
    padding: 7px;
    object-fit: cover;
  }
`;

export const SearchWrapper = styled.div<{ theme: DefaultTheme }>`
  position: relative;
  margin-bottom: 10px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 42%;
  left: 20px;
  transform: translateY(-50%);
  color: #888;
`;

export const HeaderTokenContent = styled.div<{ theme: DefaultTheme }>``;

export const HeaderLeftContent = styled.span<{ theme: DefaultTheme }>``;

export const HeaderRightContent = styled.span<{ theme: DefaultTheme }>`
  margin-left: 300px;
`;
