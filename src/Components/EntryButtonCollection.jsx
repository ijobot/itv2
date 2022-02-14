import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";
import Button from "../Utils/Button";

const StyledEntryButtonCollection = styled.div`
  display: flex;
  flex-direction: column;
`;

const EntryButtonCollection = () => {
  const { handleOpenModal } = useContext(ModalContext);

  return (
    <StyledEntryButtonCollection>
      <Button
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
        color="var(--npcColor)"
        text="Add NPC"
        onClick={(e) =>
          handleOpenModal(e, "var(--npcColor)", "NPC", "Enter NPC Details")
        }
      />
    </StyledEntryButtonCollection>
  );
};

export default EntryButtonCollection;
