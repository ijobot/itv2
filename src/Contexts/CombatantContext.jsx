import React, { useState, createContext, useContext } from "react";
import { ModalContext } from "./ModalContext";

const CombatantContext = createContext();

const CombatantContextProvider = (props) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [combatantList, setCombatantList] = useState([]);

  const { handleCloseModal, combatantType, combatantRowColor } =
    useContext(ModalContext);

  const handleCombatantSubmit = (e) => {
    e.preventDefault();
    const newCombatant = { combatantType, name, score, combatantRowColor };
    addCombatant(newCombatant);
    handleCloseModal();
  };

  const addCombatant = (newCombatant) => {
    combatantList.push(newCombatant);
    setCombatantList(combatantList);
  };

  const removeCombatant = (index) => {
    combatantList.splice(index, 1);
    setCombatantList(combatantList);
  };

  const handleClearCombatants = (e) => {
    e.currentTarget.blur();
    setCombatantList([]);
  };

  return (
    <CombatantContext.Provider
      value={{
        addCombatant,
        removeCombatant,
        handleCombatantSubmit,
        setName,
        setScore,
        combatantList,
        handleClearCombatants,
      }}
    >
      {props.children}
    </CombatantContext.Provider>
  );
};

export { CombatantContext, CombatantContextProvider };
