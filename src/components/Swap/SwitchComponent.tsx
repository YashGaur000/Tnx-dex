// SwitchComponent.tsx
import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import theme from '../../styles/Theme'; // Ensure the path is correct

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  font-size: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;

interface SwitchComponentProps {
  isChecked: boolean;
  handleToggle: () => void;
  onText: string;
  offText: string;
  disabled: boolean;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  isChecked,
  handleToggle,
  onText,
  offText,
  disabled,
}) => {
  return (
    <SwitchWrapper>
      <Switch
        onChange={handleToggle}
        checked={isChecked}
        offColor={theme.colors.text}
        height={16}
        width={32}
        handleDiameter={18}
        onColor={theme.colors.text}
        onHandleColor={theme.colors.green}
        offHandleColor={theme.colors.redToggle}
        uncheckedIcon={false}
        checkedIcon={false}
        disabled={true}
      />
      <Text>{isChecked ? onText : offText}</Text>
    </SwitchWrapper>
  );
};

export default SwitchComponent;
