import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledNameDropDown = styled.div`
  position: absolute;
  top: 90%;
  left: 40%;
  transform: translateX(-50%);
  width: 40%;
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const NameDropDown = ({ index, setShowNameDropDown, showNameDropDown }) => {
  const [input, setInput] = useState("");

  const { handleNameChange } = useContext(CombatantContext);

  const handleOnClick = (input, index) => {
    handleNameChange(input, index);
    setShowNameDropDown(!showNameDropDown);
  };
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
        onClick={() => handleOnClick(input, index)}
      />
    </StyledNameDropDown>
  );
};

export default NameDropDown;
