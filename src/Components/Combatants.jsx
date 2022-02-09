import React, { useContext } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import CombatantRow from "./CombatantRow";

const StyledCombatants = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Combatants = () => {
  const { combatantList } = useContext(CombatantContext);

  const combatantListMap = combatantList.map((combatantData, index) => (
    <CombatantRow
      combatantData={combatantData}
      index={index}
      key={Math.floor(Math.random() * 100000)}
    />
  ));

  const sortList = () => {
    combatantList.sort((a, b) => {
      return b.score - a.score;
    });
  };

  sortList();

  return <StyledCombatants>{combatantListMap}</StyledCombatants>;
};

export default Combatants;
