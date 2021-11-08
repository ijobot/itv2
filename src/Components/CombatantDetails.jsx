import React from "react";
import styled from "styled-components";

const StyledCombatantDetails = styled.p`
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  justify-self: center;
  padding: 0.25rem 2rem;

  &:hover,
  &: focus {
    color: #dddddd;
    cursor: pointer;
  }
`;

const CombatantDetails = ({ text, onClick }) => {
  return (
    <StyledCombatantDetails onClick={onClick}>{text}</StyledCombatantDetails>
  );
};

export default CombatantDetails;
