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
        color="#8CBA80"
        text="Add Player"
        onClick={(e) =>
          handleOpenModal(e, "#8CBA80", "Player", "Enter Player Details")
        }
      />
      <Button
        color="#DA4167"
        text="Add Monster"
        onClick={(e) =>
          handleOpenModal(e, "#DA4167", "Monster", "Enter Monster Details")
        }
      />
      <Button
        color="#2E86AB"
        text="Add NPC"
        onClick={(e) =>
          handleOpenModal(e, "#2E86AB", "NPC", "Enter NPC Details")
        }
      />
    </StyledEntryButtonCollection>
  );
};

export default EntryButtonCollection;
