import React from "react";
import styled from "styled-components";

const StyledCombatantDetails = styled.div`
  position: relative;
  font-weight: bold;
  word-wrap: nowrap;
  justify-self: center;
  transition: 150ms ease-in;
  outline: none;
  background: none;
  border: none;

  &:hover,
  &: focus {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
`;

const CombatantDetails = ({ text, onClick, children }) => {
  return (
    <StyledCombatantDetails>
      {children}
      <p
        tabIndex="0"
        style={{ padding: "0.25rem", fontSize: "1.5rem" }}
        onClick={onClick}
      >
        {text}
      </p>
    </StyledCombatantDetails>
  );
};

export default CombatantDetails;
