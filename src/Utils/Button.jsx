import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: ${({ small }) =>
    small ? "2px solid rgba(0, 0, 0, 0.3)" : "5px solid rgba(0, 0, 0, 0.3)"};
  background-color: ${({ buttonColor }) => buttonColor || "inherit"};
  color: #000000;
  font-size: ${({ small }) => (small ? "1rem" : "1.3rem")};
  font-weight: bold;
  padding: ${({ small }) => (small ? "0.25rem .6rem" : ".85rem")};
  cursor: pointer;
  display: block;
  width: ${({ small }) => (small ? "5rem" : "100%")};
  line-height: 1;
  box-sizing: border-box;
  height: ${({ small }) => (small ? "1.75rem" : "3.62rem")};

  &:not(:last-of-type) {
    margin-bottom: ${({ modalButton }) => (modalButton ? "1rem" : "0.5rem")};
  }

  &:hover,
  &: focus {
    color: #dddddd;
    border: ${({ small }) =>
      small
        ? "2px solid rgba(255, 255, 255, 0.7)"
        : "5px solid rgba(255, 255, 255, 0.7)"};
  }
`;

const Button = ({
  color,
  text,
  onClick,
  small = false,
  modalButton = false,
}) => {
  return (
    <StyledButton
      buttonColor={color}
      small={small}
      modalButton={modalButton}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
