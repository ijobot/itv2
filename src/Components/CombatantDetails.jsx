import React from "react";
import styled from "styled-components";

const StyledCombatantDetails = styled.div`
  position: relative;
  font-weight: bold;
  word-wrap: nowrap;
  justify-self: center;
  width: 100%;
  transition: 150ms ease-in;
  outline: none;
  background: none;
  border: none;
`;

const StyledCombatantButton = styled.button`
  padding: 0.25rem;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  line-height: 0.85;
  justify-self: center;
  font-size: 2rem;

  &:hover,
  &:focus {
    color: var(--hoverTextColor);
    cursor: pointer;
    outline: none;
  }
  @media only screen and (max-width: 1300px) {
    font-size: ${({ small }) => (small ? "1.25rem" : "1.65rem")};
  }
  @media only screen and (max-width: 1100px) {
    font-size: ${({ small }) => (small ? "1.25rem" : "1.45rem")};
  }
  @media only screen and (max-width: 1030px) {
    font-size: ${({ small }) => (small ? ".1rem" : "1.3rem")};
  }
  @media only screen and (max-width: 820px) {
    font-size: ${({ small }) => (small ? "1rem" : "1.6rem")};
    line-height: 0.9;
  }
`;

const CombatantDetails = ({ text, onClick, children }) => {
  return (
    <StyledCombatantDetails>
      {children}
      <StyledCombatantButton onClick={onClick} tabIndex="0">
        {text}
      </StyledCombatantButton>
    </StyledCombatantDetails>
  );
};

export default CombatantDetails;
