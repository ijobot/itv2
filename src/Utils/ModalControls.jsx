import React, { useContext } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { CombatantContext } from "../Contexts/CombatantContext";
import { ModalContext } from "../Contexts/ModalContext";

const StyledModalControls = styled.div`
  display: flex;
  grid-column: 1/-1;
  grid-row: 3/4;
  gap: 1rem;
`;

const ModalControls = () => {
  const { name, score, setName, setScore, handleCombatantSubmit } =
    useContext(CombatantContext);
  const { handleCloseModal } = useContext(ModalContext);
  return (
    <StyledModalControls>
      <div>
        <Input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Enter Score"
          value={score}
          pattern="[0-9]*"
          onChange={(e) =>
          setScore(parseInt(e.target.value.split(/\D/).join("")))
          }
        />
      </div>

      <div>
        <Button
          color="#6a5d83"
          text="Submit"
          onClick={(e) => handleCombatantSubmit(e)}
          marginButton
        />
        <Button
          color="#6a5d83"
          text="Cancel"
          onClick={handleCloseModal}
          marginButton
        />
      </div>
    </StyledModalControls>
  );
};

export default ModalControls;
