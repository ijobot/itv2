import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  background-color: var(--boxColor);
  border: 2px solid var(--generalColor);
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  height: 60px;
  width: 240px
  border: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:focus {
    outline: none;
    border: 4px solid var(--generalColor);
  }

  @media only screen and (max-width: 820px) {
    font-size: 20px;
    margin-top: 17px;
    text-align: justified;
    padding-left: -45px;
  
    }

  @media only screen and (max-width: 520px) {
    font-size: 20px;
    margin-top: 15px;
    text-align: justified;
    padding-left: -45px;
  
}
`;

const Input = ({ type, placeholder, value, onChange, pattern, autoFocus }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      pattern={pattern}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
};

export default Input;
