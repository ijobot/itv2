import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: ${({ small }) =>
    small ? "2px solid rgba(0, 0, 0, 0.3)" : "5px solid rgba(0, 0, 0, 0.3)"};
  background-color: ${({ buttonColor }) => buttonColor || "inherit"};
  color: #000000;
  font-size: ${({ small }) => (small ? "0.8rem" : "1.3rem")};
  font-weight: bold;
  padding: ${({ small }) => (small ? "0.25rem .6rem" : ".5rem")};
  cursor: pointer;
  display: block;
  width: 100%;
  box-sizing: border-box;
  height: ${({ small }) => (small ? "2.25rem" : "3.25rem")};

  &:not(:last-of-type) {
    margin-bottom: ${({ modalButton }) => (modalButton ? "1rem" : "0.5rem")};
  }

  &:hover,
  &: focus {
    color: #ebebeb;
    box-shadow: inset 0px 0px 10px 1px #ebebeb;
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
      <p>{text}</p>
    </StyledButton>
  );
};

export default Button;
