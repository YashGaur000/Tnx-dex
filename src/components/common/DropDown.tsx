import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import UpWardIcon from '../../assets/select.svg';
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
  width?: number;
}>`
  cursor: pointer;
  display: flex;

  align-items: center;
  gap: 10px;
  border-color: ${({ theme }) => theme.colors.greyBorder};
  background: ${({ theme }) => theme.colors.bordercolor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 8px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.whiteBorder};
  justify-content: space-between;
  padding: 10px;
  position: relative;

  &::before {
    content: '';
    padding: 1px;
    position: absolute;
    inset: 0;
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.buttonBackground};
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
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

const OptionContainer = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: linear-gradient(180deg, #18264c 0%, #141e3b 100%);
    border-radius: 16px;
  }
`;

const ImgUpSelect = styled.img`
  margin-right: 10px;
  width: 10px;
  transform: rotate(180deg);
`;
const ImgDownSelect = styled.img`
  margin-right: 10px;
  width: 10px;
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
        height={31}
        width={100}
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
