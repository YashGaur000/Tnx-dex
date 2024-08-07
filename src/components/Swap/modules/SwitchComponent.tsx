import React from 'react';
import Switch from 'react-switch';
import { SwitchText, SwitchWrapper } from '../styles/SwitchComponent.style';
import theme from '../../../styles/Theme';

interface SwitchComponentProps {
  isChecked: boolean;
  handleToggle: () => void;
  onText: string;
  offText: string;
  isDisabled: boolean;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  isChecked,
  handleToggle,
  onText,
  offText,
  isDisabled,
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
        disabled={isDisabled}
      />
      <SwitchText>{isChecked ? onText : offText}</SwitchText>
    </SwitchWrapper>
  );
};

export default SwitchComponent;
