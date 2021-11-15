import React from "react";
import styled from "styled-components";

const StyledCombatantDetails = styled.div`
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  justify-self: center;

  &:hover,
  &: focus {
    color: #dddddd;
    cursor: pointer;
  }
`;

const CombatantDetails = ({ text, onClick, children }) => {
  return (
    <StyledCombatantDetails>
      {children}
      <div style={{ padding: "0.25rem 2rem" }} onClick={onClick}>
        {text}
      </div>
    </StyledCombatantDetails>
  );
};

export default CombatantDetails;
