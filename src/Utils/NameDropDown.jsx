import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledNameDropDown = styled.div`
  position: absolute;
  top: 160%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: 0.5rem;
  z-index: 10;
  background-color: var(--boxColor);
  border: var(--border);
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 0.5rem;

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
        color="var(--borderColor)"
        text="Done"
        onClick={() => handleOnClick(input, index)}
      />
    </StyledNameDropDown>
  );
};

export default NameDropDown;
