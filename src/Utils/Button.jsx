import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid rgba(0, 0, 0, 0.3);
  background-color: ${({ buttonColor }) => buttonColor || "inherit"};

  color: rgba(0, 0, 0, 1);
  font-size: ${({ small }) => (small ? "1.25rem" : "1.75rem")};
  font-weight: bold;
  padding: ${({ small }) =>
    small ? ".2rem .5rem 0rem" : ".85rem .85rem .65rem"};
  cursor: pointer;
  width: ${({ small }) => (small ? "2.5rem" : "100%")};
  line-height: 1;
  margin-bottom: 0;
  align-items: center;
  box-sizing: border-box;
  height: ${({ small }) => (small ? "40px" : "60px")};
  transition: 100ms ease-in;

  &:not(:last-of-type) {
    margin-bottom: ${({ marginButton, noMargin }) =>
      marginButton ? "1rem" : noMargin ? "0rem" : ".5rem"};
  }

  &:hover,
  &: focus {
    outline: none;
    color: rgba(255, 255, 255, 0.7);
    border: 3px solid rgba(255, 255, 255, 0.2);
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 820px) {
    font-size: ${({ small }) => (small ? "1rem" : "1.75rem")};
    padding: ${({ small }) =>
      small ? "0.2rem .5rem" : ".85rem .85rem .65rem"};
    width: ${({ small }) => (small ? "40px" : "23%")};
    height: ${({ small }) => (small ? "40px" : "100px")};

    :last-of-type {
      margin-left: auto;
      min-width: 2.5rem;
    }

    &:not(:last-of-type) {
      margin-bottom: ${({ marginButton }) => (marginButton ? ".5rem" : "0rem")};
    }
  }

  @media only screen and (max-width: 425px) {
  }
`;

const Button = ({
  color,
  text,
  onClick,
  small = false,
  noMargin = false,
  marginButton = false,
}) => {
  return (
    <StyledButton
      buttonColor={color}
      small={small}
      marginButton={marginButton}
      onClick={onClick}
      noMargin={noMargin}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
