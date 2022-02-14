import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 5px solid rgba(0, 0, 0, 0.3);
  background-color: ${({ buttonColor }) => buttonColor || "inherit"};
  color: rgba(0, 0, 0, 1);
  font-size: ${({ small }) => (small ? "1rem" : "1.5rem")};
  font-weight: bold;
  padding: ${({ small }) => (small ? "0.25rem .5rem" : ".85rem .85rem .65rem")};
  cursor: pointer;
  min-width: ${({ small }) => (small ? "100%" : "100%")};
  line-height: 1;
  display; inline-flex;
  align-items: center;
  box-sizing: border-box;
  height: ${({ small }) => (small ? "100%" : "4rem")};
  transition: 150ms ease-in;

  &:not(:last-of-type) {
    margin-bottom: ${({ marginButton }) => (marginButton ? "1rem" : ".5rem")};
  }

  &:hover,
  &: focus {
    outline: none;
    color: rgba(255, 255, 255, 0.7);
    border: 5px solid rgba(255, 255, 255, 0.2);
  }
`;

const Button = ({
  color,
  text,
  onClick,
  small = false,
  marginButton = false,
}) => {
  return (
    <StyledButton
      buttonColor={color}
      small={small}
      marginButton={marginButton}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
