import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledTypeDropDown = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
`;

const TypeDropDown = ({ index, setShowTypeDropDown }) => {
  const { handleTypeChange, combatantList } = useContext(CombatantContext);

  if (!combatantList[index].showType) {
    setShowTypeDropDown(false)
  }
  
  const handleOnClick = (type, color) => {
    handleTypeChange(type, color, index);
    setShowTypeDropDown(false);

  };
  return (
    <StyledTypeDropDown>
      <Button
        text="Player"
        color="#8CBA80"
        onClick={() => handleOnClick("Player", "#8CBA80")}
        marginButton
      />
      <Button
        text="Monster"
        color="#DA4167"
        onClick={() => handleOnClick("Monster", "#DA4167")}
        marginButton
      />
      <Button
        text="NPC"
        color="#2E86AB"
        onClick={() => handleOnClick("NPC", "#2E86AB")}
        marginButton
      />
    </StyledTypeDropDown>
  );
};

export default TypeDropDown;
