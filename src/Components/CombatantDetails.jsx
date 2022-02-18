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
  font-size: 1.5rem;
  background: transparent;
  border: none;
  height: 2rem;
  width: 100%;
  line-height: 1.1;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    outline: none;
  }

  @media only screen and (max-width: 820px) {
    font-size: 1.2rem;
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
