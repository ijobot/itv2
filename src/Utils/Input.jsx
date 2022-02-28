import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  background-color: var(--boxColor);
  border: 3px solid var(--borderColorLight);
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1;
  height: 60px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.75rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:focus {
    outline: none;
    border: 3px solid var(--hoverTextColor);
  }

  @media only screen and (max-width: 1030px) {
    font-size: 1.5rem;
    ::placeholder {
      font-size: 1.5rem;
    }
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
