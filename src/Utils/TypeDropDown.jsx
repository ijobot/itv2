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
  background-color: var(--boxColor);
  border: 3px solid var(--borderColorLight);
  width: 170px;
  height: fit-content;

  &::before {
    position: absolute;
    top: -9px;
    left: 50%;
    transform: translateX(-50%) rotateZ(135deg);
    content: " ";
    height: 10px;
    width: 10px;
    background-color: var(--boxColor);
    border-left: 3px solid var(--borderColorLight);
    border-bottom: 3px solid var(--borderColorLight);
    z-index: 15;
    overflow: visible;
  }
  
  &;button {
    width: 100%;
    height: min-content;
  }

  &;button:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 680px) {
    width: 130px;
    left: 95%;
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
