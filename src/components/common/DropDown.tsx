import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import UpWardIcon from '../../assets/selectGradient.svg';
import { DefaultTheme } from '../../styles/Theme';

interface Option {
  id: number;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const CustomSelect = styled.div`
  position: relative;
  width: 40%;
`;

const SelectSelectedItem = styled.div<{
  theme: DefaultTheme;
  height?: number;
  width?: string;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.cardLight},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 8px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width};
  min-width: 100px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.whiteBorder};
  justify-content: space-between;
  padding: 4px 8px;
`;

const SelectItem = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  display: block;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  box-shadow: 0px 4px 11.4px 0px #131d3c;
  padding: 20px;
  width: 150px;
  margin-top: 20px;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const OptionContainer = styled.div<{ theme: DefaultTheme }>`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.cardLight};
    border-radius: 10px;
  }
`;

const ImgUpSelect = styled.img`
  width: 9px;
  height: 4.85px;
  transform: rotate(180deg);
`;
const ImgDownSelect = styled.img`
  height: 4.85px;
  width: 9px;
`;

const DropDown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <CustomSelect ref={dropdownRef}>
      <SelectSelectedItem
        height={29}
        width={'100%'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption && <OptionItem>{selectedOption.label}</OptionItem>}
        {isOpen ? (
          <ImgUpSelect src={UpWardIcon} alt="Dropdown Icon" />
        ) : (
          <ImgDownSelect src={UpWardIcon} alt="Dropdown Icon" />
        )}
      </SelectSelectedItem>
      {isOpen && (
        <SelectItem>
          {options.map((option) => (
            <OptionContainer
              key={option.id}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </OptionContainer>
          ))}
        </SelectItem>
      )}
    </CustomSelect>
  );
};

export default DropDown;
