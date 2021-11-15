import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 3px solid rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  background-color: #222422;
  color: #ebebeb;
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1;
  height: 3.62rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const Input = ({ type, placeholder, value, onChange, pattern }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      pattern={pattern}
      onChange={onChange}
    />
  );
};

export default Input;
