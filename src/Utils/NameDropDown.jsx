import React, { useContext } from "react";
import styled from "styled-components";
import Input from "../Utils/Input";
import { CombatantContext } from "../Contexts/CombatantContext";

const StyledNameDropDown = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  width: 300%;
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
`;

const NameDropDown = () => {
  const { name } = useContext(CombatantContext);
  return (
    <StyledNameDropDown>
      <Input type="text" placeholder="Edit name" value={name} />
    </StyledNameDropDown>
  );
};

export default NameDropDown;
