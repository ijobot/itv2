import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledTypeDropDown = styled.div`
  position: absolute;
  top: 90%;
  left: 6%;
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
  width: 140px;
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
        color="#8CBA80"
        onClick={() => handleOnClick("Player", "#8CBA80", index)}
        marginButton
      />
      <Button
        text="Monster"
        color="#DA4167"
        onClick={() => handleOnClick("Monster", "#DA4167", index)}
        marginButton
      />
      <Button
        text="NPC"
        color="#2E86AB"
        onClick={() => handleOnClick("NPC", "#2E86AB", index)}
        marginButton
      />
    </StyledTypeDropDown>
  );
};

export default TypeDropDown;
