import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  background-color: var(--boxColor);
  border: 5px solid rgba(0, 0, 0, 0.3);
  color: var(--borderColor);
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  height: 4rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:hover,
  &: focus {
    outline: none;
    color: rgba(255, 255, 255, 0.7);
    border: 5px solid rgba(255, 255, 255, 0.4);
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
