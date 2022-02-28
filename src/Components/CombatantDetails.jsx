import React from "react";
import styled from "styled-components";

const StyledCombatantDetails = styled.div`
  position: relative;
  font-size: 1.75rem;
  font-weight: bold;
  word-wrap: nowrap;
  justify-self: center;
  width: 100%;
  transition: 150ms ease-in;
  outline: none;
  background: none;
  border: none;
  line-height: 0.9;

  @media only screen and (max-width: 820px) {
    line-height: 0.9;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1rem;
    line-height: 0.9;
  }
`;

const StyledCombatantButton = styled.button`
  padding: 0.25rem;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  line-height: 0.6;
  justify-self: center;
  align-self: center;
  font-size: 1.75rem;

  &:hover,
  &:focus {
    color: var(--hoverTextColor);
    cursor: pointer;
    outline: none;
  }

  @media only screen and (max-width: 1030px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 530px) {
    font-size: 1rem;
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
