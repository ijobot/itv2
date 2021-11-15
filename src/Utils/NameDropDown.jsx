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
  min-width: 300%;
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const NameDropDown = ({ index }) => {
  const [input, setInput] = useState("");

  const { handleNameChange, name } = useContext(CombatantContext);
  return (
    <StyledNameDropDown>
      <Input
        type="text"
        placeholder="Edit name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        color="#6a5d83"
        text="Done"
        onClick={() => handleNameChange(input, index)}
      />
    </StyledNameDropDown>
  );
};

export default NameDropDown;
