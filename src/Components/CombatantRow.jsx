import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import { ModalContext } from "../Contexts/ModalContext";
import Button from "../Utils/Button";
import CombatantDetails from "./CombatantDetails";
import TypeDropDown from "../Utils/TypeDropDown";
import NameDropDown from "../Utils/NameDropDown";
import ScoreDropDown from "../Utils/ScoreDropDown";
import cloneDeep from "lodash.clonedeep";

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
  const { combatantRowColor } = useContext(ModalContext);

  const [showTypeDropDown, setShowTypeDropDown] = useState(false);
  const [showNameDropDown, setShowNameDropDown] = useState(false);
  const [showScoreDropDown, setShowScoreDropDown] = useState(false);

  // const clonedCombatantData = cloneDeep(combatantData);
  // const combatantColor = clonedCombatantData.combatantRowColor;

  return (
    <StyledCombatantRow
      style={{ backgroundColor: combatantData.combatantRowColor }}
      index={index}
    >
      <CombatantDetails
        text={combatantData.combatantType}
        onClick={() => setShowTypeDropDown(!showTypeDropDown)}
      >
        {showTypeDropDown && (
          <TypeDropDown color={combatantRowColor} index={index} />
        )}
      </CombatantDetails>

      <CombatantDetails
        text={combatantData.name}
        onClick={() => setShowNameDropDown(!showNameDropDown)}
      >
        {showNameDropDown && <NameDropDown index={index} />}
      </CombatantDetails>

      <CombatantDetails
        text={combatantData.score}
        onClick={() => setShowScoreDropDown(!showScoreDropDown)}
      >
        {showScoreDropDown && <ScoreDropDown />}
      </CombatantDetails>

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
