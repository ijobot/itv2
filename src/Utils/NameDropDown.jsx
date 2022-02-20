import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledNameDropDown = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  z-index: 5;
  background-color: var(--boxColor);
  border: 3px solid var(--borderColor);
  width: 400px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 0.5rem;

  &;button {
    width: 100%;
    height: 60px;
  }

  &::before {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--borderColor);
    z-index: 4;
  }
`;

const NameDropDown = ({ index, setShowNameDropDown }) => {
  const [input, setInput] = useState("");

  const { handleNameChange, combatantList } = useContext(CombatantContext);

  const handleOnClick = (input, index) => {
    handleNameChange(input, index);
    setShowNameDropDown(false);
  };
  return (
    <StyledNameDropDown>
      <Input
        autoFocus
        type="text"
        value={input}
        placeholder={combatantList[index].name}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        color="var(--generalColor)"
        text="Done"
        onClick={() => handleOnClick(input, index)}
      />
    </StyledNameDropDown>
  );
};

export default NameDropDown;
