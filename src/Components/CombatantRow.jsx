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
  grid-template-columns: 1fr 1fr 1fr 0.4fr auto;
  align-items: center;
  padding: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.3);

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const CombatantRow = ({ combatantData, index }) => {
  const { removeCombatant, combatantList, handleTypeChanging } = useContext(CombatantContext);
  const [ showTypeDropDown, setShowTypeDropDown ] = useState(combatantList[index].showType)
  const [ showScoreDropDown, setShowScoreDropDown ] = useState(false)
  const [ showNameDropDown, setShowNameDropDown ] = useState(false)

  const handleDropDowns = () => {
    combatantList.forEach((x, index) => combatantList[index].showType = false)
    }
   

  const closeOtherDropDowns = () => {
    if (!combatantList.showType) {
      combatantList.showType = false
      console.log(combatantList)
    }
  }

  const handleTypeDropDowns = () => {
    handleTypeChanging(true, index)
    setShowTypeDropDown(true)
    console.log(combatantList[index].showType)
    console.log(combatantList[index])
    handleDropDowns()
  }

  return (
    <StyledCombatantRow
      style={{ backgroundColor: combatantData.combatantRowColor }}
      index={index}
    >
      <CombatantDetails
        text={combatantData.combatantType}
        onClick={() => handleTypeDropDowns()}
        index={index}
      >
        {showTypeDropDown && (
          <TypeDropDown
            index={index}
            setShowTypeDropDown={setShowTypeDropDown}
          />
        )}
      </CombatantDetails>

      <CombatantDetails
        text={combatantData.name}
        onClick={() => setShowNameDropDown(true)}
      >
        {showNameDropDown && <NameDropDown index={index} />}
      </CombatantDetails>

      <CombatantDetails
        text={combatantData.score}
        onClick={() => setShowScoreDropDown(true)}
      >
        {showScoreDropDown && <ScoreDropDown index={index} />}
      </CombatantDetails>

      <CombatantDetails />

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
