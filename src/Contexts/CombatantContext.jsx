import React, { useState, createContext, useContext } from "react";
import { ModalContext } from "./ModalContext";
import cloneDeep from "lodash.clonedeep";

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
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList.push(newCombatant);
    setCombatantList(updatedCombatantList);
  };

  const removeCombatant = (index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList.splice(index, 1);
    setCombatantList(updatedCombatantList);
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
        combatantRowColor,
        handleClearCombatants,
      }}
    >
      {props.children}
    </CombatantContext.Provider>
  );
};

export { CombatantContext, CombatantContextProvider };