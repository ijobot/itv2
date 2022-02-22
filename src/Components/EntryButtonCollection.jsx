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

  button:last-of-type {
    margin-top: auto;
  }

  @media only screen and (max-width: 1100px) {
    button {
      font-size: ${({ small }) => (small ? ".75rem" : "1.25rem")};
    }
  }

  @media only screen and (max-width: 820px) {
    flex-direction: row;
    gap: 0.5rem;

    &;button:nth-of-type(3) {
      padding: 0 30px;
    }

    &;button:nth-of-type(4) {

      margin-left: auto;
      margin-bottom: 8px;
      padding: 5px 40px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 520px) {
    button {
      height: 70px;
      width: 80px;
      font-size: 15px; 
    }
  }

  @media only screen and (max-width: 420px) {
    button {
      height: 60px;
      width: 70px;
      font-size: 12.5px; 
    }
  }

  @media only screen and (max-width: 389px) {
    button {
      height: 50px;
      width: 60px;
      font-size: 10.5px; 
    }
  }

  @media only screen and (max-width: 425px) {
    &;button {
      font-size: ${({ small }) => (small ? ".25rem" : "1rem")};
      padding: 0;
      height: 60px;}

      &;button:nth-of-type(3) {
        padding: 0px;
      }
  
      &;button:nth-of-type(4) {
        margin-left: auto;
        padding: 0px;
      }
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
