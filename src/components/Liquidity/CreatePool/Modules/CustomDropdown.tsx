import React, { useState, useRef, useEffect } from 'react';
import UpwardIcon from '../../../../assets/fwd-arrow.png';
import styled from 'styled-components';
import SearchIcon from '../../../../assets/search-icon.png';
import { Input } from '../../../common';

const CustomSelect = styled.div`
  position: relative;

  width: 100%;
`;
const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #b8b8b899;
  padding: 0px 10px;
  gap: 10px;
  border-radius: 20px;
`;

const SelectSelectedItem = styled.div`
  padding: 10px;
  padding-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid rgba(184, 184, 184, 0.6);
  border-radius: 16px;
  height: 50px;
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);

  justify-content: space-between;
`;
const SelectItem = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  padding: 20px;
  border-radius: 16px;
  display: block;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
`;
const Img = styled.img`
  margin-right: 10px;
`;
const OptionConataner = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background: linear-gradient(180deg, #18264c 0%, #141e3b 100%);
    border-radius: 16px;
  }
`;
const ImgSelect = styled.img`
  margin-right: 10px;

  width: 20px;
  height: 20px;
`;
const DropUpImg = styled.img`
  transform: rotate(90deg);
  width: 20px;
  height: 20px;
`;
const DropdownImg = styled.img`
  transform: rotate(270deg);
  width: 20px;
  height: 20px;
`;
export interface Option {
  id: number;
  label: string;
  imageUrl: string;
}

interface CustomDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
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
      <SelectSelectedItem onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <Option>
            <Img
              src={selectedOption.imageUrl}
              alt={selectedOption.label}
              width="20px"
              height="20px"
            />
            {selectedOption.label}
          </Option>
        ) : (
          'Select Token'
        )}
        {isOpen ? (
          <DropUpImg src={UpwardIcon} />
        ) : (
          <DropdownImg src={UpwardIcon} />
        )}
      </SelectSelectedItem>
      {isOpen && (
        <SelectItem>
          <InputBoxWrap>
            <img src={SearchIcon} />
            <Input type="text" width={100} />
          </InputBoxWrap>
          {options.map((option) => (
            <OptionConataner
              key={option.id}
              onClick={() => handleSelect(option)}
            >
              <ImgSelect
                src={option.imageUrl}
                alt={option.label}
                width="30"
                height="30"
              />
              {option.label}
            </OptionConataner>
          ))}
        </SelectItem>
      )}
    </CustomSelect>
  );
};

export default CustomDropdown;
