import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";
import CombatantDetails from "./CombatantDetails";
import TypeDropDown from "../Utils/TypeDropDown";
import NameDropDown from "../Utils/NameDropDown";
import ScoreDropDown from "../Utils/ScoreDropDown";

const StyledCombatantRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.25fr auto;
  align-items: center;
  padding: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.3);

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const CombatantRow = ({ combatantData, index }) => {
  const { removeCombatant } = useContext(CombatantContext);
  const [showTypeDropDown, setShowTypeDropDown] = useState(false);
  const [showNameDropDown, setShowNameDropDown] = useState(false);
  const [showScoreDropDown, setShowScoreDropDown] = useState(false);
  return (
    <StyledCombatantRow
      style={{ backgroundColor: combatantData.combatantRowColor }}
    >
      <CombatantDetails
        text={combatantData.combatantType}
        onClick={() => setShowTypeDropDown(!showTypeDropDown)}
      ></CombatantDetails>
      {showTypeDropDown && (
        <TypeDropDown
          style={{ backgroundColor: combatantData.combatantRowColor }}
        />
      )}

      <CombatantDetails
        text={combatantData.name}
        onClick={() => setShowNameDropDown(!showNameDropDown)}
      ></CombatantDetails>
      {showNameDropDown && <NameDropDown />}

      <CombatantDetails
        text={combatantData.score}
        onClick={() => setShowScoreDropDown(!showScoreDropDown)}
      ></CombatantDetails>
      {showScoreDropDown && <ScoreDropDown />}

      <CombatantDetails text="" />
      <Button
        text="Remove"
        color="#6a5d83"
        onClick={() => removeCombatant(index)}
        small
        end
      />
    </StyledCombatantRow>
  );
};

export default CombatantRow;