import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const ToolsPopupFromMaincontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const ToolsPopupFromHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ToolPopupFormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FormLable = styled.label<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 23.92px;
`;

export const FormInput = styled.input<{ theme: DefaultTheme }>`
  width: 100%;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.small};
  border-radius: 12px;
  padding: 10px;
  background: transparent;
  border: 1px solid grey;
`;

export const FormMainContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ShareFormParagraph = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 17.94px;
  color: rgba(153, 157, 166, 1);
`;
export const FormTextArea = styled.textarea<{ theme: DefaultTheme }>`
  width: 100%;
  height: 120px;
  border-radius: 12px;
  padding: 10px;
  background: transparent;
  border: 1px solid grey;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSize.small};
  resize: none;
  overflow: hidden;
`;

export const PopupFormCard = styled.div`
  background: linear-gradient(180deg, #273762 0%, #2a3e75 100%);
  width: 100%;
  height: 80px;
  padding: 16px;
  border-radius: 12px;
`;

export const ToggleSwitch = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: 60px;
  height: 20px;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) =>
      props.isActive
        ? 'linear-gradient(209.3deg, #16C062 7.44%, #3EACFC 86.34%)'
        : 'linear-gradient(209.3deg, #16C062 7.44%, #3EACFC 86.34%)'};
    top: 2px;
    right: ${(props) => (props.isActive ? '42px' : '2px')};
    transition: left 0.3s;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
