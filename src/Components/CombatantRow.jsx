import React, { useContext, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";
import CombatantDetails from "./CombatantDetails";
import TypeDropDown from "../Utils/TypeDropDown";
import NameDropDown from "../Utils/NameDropDown";
import ScoreDropDown from "../Utils/ScoreDropDown";

const StyledCombatantRow = styled.div`
  position: relative;
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
  const { removeCombatant } = useContext(CombatantContext);
  const [showTypeDropDown, setShowTypeDropDown] = useState(false);
  const [showScoreDropDown, setShowScoreDropDown] = useState(false);
  const [showNameDropDown, setShowNameDropDown] = useState(false);

  const refs = useRef([]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showTypeDropDown &&
        refs.current 
        // && !refs.current[0].contains(e.target)
      )
        setShowTypeDropDown(false);
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showTypeDropDown]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showNameDropDown &&
        refs.current 
        && !refs.current[1].contains(e.target)
      )
        setShowNameDropDown(false);
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showNameDropDown]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showScoreDropDown &&
        refs.current 
        // && !refs.current[2].contains(e.target)
      )
        setShowScoreDropDown(false);
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showScoreDropDown]);

  return (
    <StyledCombatantRow
      style={{ backgroundColor: combatantData.combatantRowColor }}
      index={index}
      ref={(element) => {
        refs.current[index] = element;
      }}
    >
      <CombatantDetails
        text={combatantData.combatantType}
        onClick={() => setShowTypeDropDown(true)}
        index={index}
      ></CombatantDetails>
      {showTypeDropDown && (
        <TypeDropDown
          index={index}
          setShowTypeDropDown={setShowTypeDropDown}
          showTypeDropDown={showTypeDropDown}
        />
      )}

      <CombatantDetails
        text={combatantData.name}
        onClick={() => setShowNameDropDown(true)}
        index={index}
      ></CombatantDetails>
      {showNameDropDown && (
        <NameDropDown
          index={index}
          setShowNameDropDown={setShowNameDropDown}
          showNameDropDown={showNameDropDown}
        />
      )}

      <CombatantDetails
        text={combatantData.score}
        onClick={() => setShowScoreDropDown(true)}
      ></CombatantDetails>
      {showScoreDropDown && (
        <ScoreDropDown
          index={index}
          setShowScoreDropDown={setShowScoreDropDown}
          showScoreDropDown={showScoreDropDown}
        />
      )}

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
