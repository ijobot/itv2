import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";

const StyledEntryButtonCollection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  width: 100%;

  @media only screen and (max-width: 820px) {
    flex-direction: row;
    gap: 0.5rem;

    button:last-of-type {
      margin-left: 1rem;
    }
  }
`;

const EntryButtonCollection = () => {
  const { handleOpenModal } = useContext(ModalContext);
  const { handleClearCombatants } = useContext(CombatantContext);

  return (
    <StyledEntryButtonCollection>
      <Button
        marginButton
        color="var(--playerColor)"
        text="Add Player"
        onClick={(e) =>
          handleOpenModal(
            e,
            "var(--playerColor)",
            "Player",
            "Enter Player Details"
          )
        }
      />
      <Button
        marginButton
        color="var(--monsterColor)"
        text="Add Monster"
        onClick={(e) =>
          handleOpenModal(
            e,
            "var(--monsterColor)",
            "Monster",
            "Enter Monster Details"
          )
        }
      />
      <Button
        marginButton
        color="var(--npcColor)"
        text="Add NPC"
        onClick={(e) =>
          handleOpenModal(e, "var(--npcColor)", "NPC", "Enter NPC Details")
        }
      />
      <Button
        color="var(--generalColor)"
        text="Clear All"
        onClick={(e) => handleClearCombatants(e)}
      />
    </StyledEntryButtonCollection>
  );
};

export default EntryButtonCollection;
