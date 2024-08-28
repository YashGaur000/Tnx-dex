import React, { useState } from 'react';
import styled from 'styled-components';

interface InputboxStyledProps {
  width?: string;
  height?: string;
  border?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  isValid?: boolean;
}

const Inputbox = styled.input<InputboxStyledProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '8px'};
  border: ${({ border, isValid }) =>
    border ?? `1px solid ${isValid ? 'green' : 'red'}`};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  background: none;
  color: white;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  & {
    -moz-appearance: textfield;
  }
`;

interface InputBoxProps extends InputboxStyledProps {
  type?: React.HTMLInputTypeAttribute;
  handleInputData?: (value: string) => boolean;
  initialValue?: string | number;
  placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  type = 'text',
  handleInputData = () => true,
  initialValue = '',
  placeholder = '',
  width,
  height,
  border,
  fontSize,
  margin,
  padding,
}) => {
  const [value, setValue] = useState<string | number>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setIsValid(handleInputData(inputValue));
  };

  return (
    <Inputbox
      type={type}
      value={value}
      width={width}
      height={height}
      border={border}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      onChange={handleInputBox}
      isValid={isValid}
      placeholder={placeholder}
    />
  );
};

export default InputBox;
