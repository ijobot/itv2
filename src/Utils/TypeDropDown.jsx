import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledTypeDropDown = styled.div`
  position: absolute;
  top: 160%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  z-index: 10;
  background-color: var(--boxColor);
  border: var(--border);
  width: 170px;

  &::before {
    position: absolute;
    top: -23px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--borderColor);
    z-index: 9;
  }
`;

const TypeDropDown = ({ index, setShowTypeDropDown, showTypeDropDown }) => {
  const { handleTypeChange } = useContext(CombatantContext);

  const handleOnClick = (type, color, index) => {
    handleTypeChange(type, color, index);
    setShowTypeDropDown(!showTypeDropDown);
  };

  return (
    <StyledTypeDropDown>
      <Button
        text="Player"
        color="var(--playerColor)"
        onClick={() => handleOnClick("Player", "var(--playerColor)", index)}
      />
      <Button
        text="Monster"
        color="var(--monsterColor)"
        onClick={() => handleOnClick("Monster", "var(--monsterColor)", index)}
      />
      <Button
        text="NPC"
        color="var(--npcColor)"
        onClick={() => handleOnClick("NPC", "var(--npcColor)", index)}
      />
    </StyledTypeDropDown>
  );
};

export default TypeDropDown;
