import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid rgba(0, 0, 0, 0.3);
  background-color: ${({ buttonColor }) => buttonColor || "inherit"};
  color: rgba(0, 0, 0, 1);
  font-size: ${({ small }) => (small ? "1rem" : "1.5rem")};
  font-weight: bold;
  padding: ${({ small }) => (small ? "0.5rem" : ".85rem .85rem .65rem")};
  cursor: pointer;
  width: ${({ small }) => (small ? "2.5rem" : "100%")};
  line-height: 1;
  display; inline-flex;
  align-items: center;
  box-sizing: border-box;
  height: ${({ small }) => (small ? "2.5rem" : "4.25rem")};
  transition: 100ms ease-in;

  &:not(:last-of-type) {
    margin-bottom: ${({ marginButton }) => (marginButton ? ".5rem" : "0rem")};
  }

  &:hover,
  &: focus {
    outline: none;
    color: rgba(255, 255, 255, 0.7);
    border: 3px solid rgba(255, 255, 255, 0.2);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.25em;
    height:  ${({ small }) => (small ? "100%" : "5rem")};
  }

  @media only screen and (max-width: 820px) {
    height: 100%;
    font-size: ${({ small }) => (small ? ".6rem" : "1.2rem")};
    padding: ${({ small }) =>
      small ? "0.2rem .5rem" : ".85rem .85rem .65rem"};

    &:not(:last-of-type) {
      margin-bottom: ${({ marginButton }) => (marginButton ? ".5rem" : "0rem")};
    }

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
