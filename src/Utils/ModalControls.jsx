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

  @media only screen and (max-width: 820px) {
    button {
      height: 4.25rem;
      gap: 0.5rem;
    }
  }
`;

const ModalControls = () => {
  const { name, score, setName, setScore, handleCombatantSubmit } =
    useContext(CombatantContext);
  const { handleCloseModal } = useContext(ModalContext);

  return (
    <StyledModalControls>
      <div>
        <Input
          autoFocus
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
          color="var(--generalColor)"
          text="Submit"
          onClick={(e) => handleCombatantSubmit(e)}
          marginButton
        />
        <Button
          color="var(--generalColor)"
          text="Cancel"
          onClick={handleCloseModal}
        />
      </div>
    </StyledModalControls>
  );
};

export default ModalControls;
