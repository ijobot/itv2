import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import Combatant from "./Combatant";

const StyledCombatants = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Combatants = () => {
  const { combatantList } = useContext(CombatantContext);

  const combatantListMap = combatantList.map((combatantData, index) => (
    <Combatant
      combatantData={combatantData}
      index={index}
      key={combatantData.name + combatantData.score}
    />
  ));

  const sortList = () => {
    combatantList.sort((a, b) => {
      return b.score - a.score;
    });
  };

  sortList();

  useEffect(() => {
    return combatantListMap;
  });

  return <StyledCombatants>{combatantListMap}</StyledCombatants>;
};

export default Combatants;
