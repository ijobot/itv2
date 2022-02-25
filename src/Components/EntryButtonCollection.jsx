import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";

const StyledEntryButtonCollection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  &;button:nth-of-type(4) {
    margin-top: auto;
  }

  @media only screen and (max-width: 820px) {
    flex-direction: row;
    gap: 0.5rem;

    &;button {
      width: 130px;
    }

    &;button:nth-of-type(4) {
      margin-top: 0;
      margin-left: auto;
    }
  }

  @media only screen and (max-width: 680px) {
    &;button {
      font-size: 1.25rem;
      width: 110px;
      height: 80px;
    }
  }


  @media only screen and (max-width: 620px) {
    &;button {
      font-size: 1rem;
      width: 100px;
      height: 60px;
    }
  }

  @media only screen and (max-width: 550px) {
    &;button {
      font-size: .95rem;
      width: 80px;
      height: 60px;
      padding: 0 .1rem;
    }
  }

  @media only screen and (max-width: 450px) {
    &;button {
      font-size: .85rem;
      width: auto;
      height: 50px;
      padding: 0 .1rem;
    }
  }

`;

const EntryButtonCollection = () => {
  const { handleOpenModal } = useContext(ModalContext);
  const { handleClearCombatants } = useContext(CombatantContext);

  return (
    <StyledEntryButtonCollection>
      <Button
        color="var(--playerColor)"
        text="Add 
        Player"
        onClick={(e) =>
          handleOpenModal(e, "var(--playerColor)", "Player", "Player Details")
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
            "Monster Details"
          )
        }
      />
      <Button
        color="var(--npcColor)"
        text="Add NPC"
        onClick={(e) =>
          handleOpenModal(e, "var(--npcColor)", "NPC", "NPC Details")
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
