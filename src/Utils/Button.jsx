import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid rgba(0, 0, 0, 0.3);
  background-color: ${({ buttonColor }) => buttonColor || "inherit"};
  color: ${({ small }) => (small ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 1)")};
  font-size: ${({ small }) => (small ? "1.25rem" : "1.75rem")};
  font-weight: bold;
  padding: ${({ small }) => (small ? ".1rem 0 0" : ".85rem .85rem .65rem")};
  cursor: pointer;
  width: ${({ small }) => (small ? "30px" : "100%")};
  line-height: 1;
  margin-bottom: 0;
  align-items: center;
  box-sizing: border-box;
  height: ${({ small }) => (small ? "30px" : "min-content")};
  transition: 50ms ease-in;

  &:not(:last-of-type) {
    margin-bottom: ${({ marginButton, noMargin }) =>
      marginButton ? "1rem" : noMargin ? "0rem" : ".5rem"};
  }

  &:hover,
  &: focus {
    outline: none;
    color: var(--hoverTextColor);
    border: 3px solid var(--hoverTextColor);
  }

  @media only screen and (max-width: 1030px) {
    width: ${({ small }) => (small ? "30px" : "100%")};
    font-size: ${({ small }) => (small ? ".75rem" : "1.5rem")};
  }

  @media only screen and (max-width: 820px) {
    font-size: ${({ small }) => (small ? "1rem" : "1.5rem")};
    height: ${({ small }) => (small ? "30px" : "80px")};
    text-align: justified;

    :last-of-type {
      margin-left: auto;
    }

    &:not(:last-of-type) {
      margin-bottom: 0rem;
    }
  }

  @media only screen and (max-width: 680px) {
    font-size: ${({ small }) => (small ? ".75rem" : "1.25rem")};
    height: ${({ small }) => (small ? "30px" : "80px")};
    text-align: justified;

    :last-of-type {
      margin-left: auto;
    }

    &:not(:last-of-type) {
      margin-bottom: 0rem;
    }
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
