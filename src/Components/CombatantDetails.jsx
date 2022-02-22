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

  @media only screen and (max-width: 1100px) {
    button {
      font-size: 1.5rem;
    }
  }
`;

const StyledCombatantButton = styled.button`
  padding: 0.25rem;
  font-size: 2rem;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  line-height: 0.9;
  justify-self: center;
  padding-top: 5px;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    outline: none;
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
