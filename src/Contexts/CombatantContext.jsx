import React, { useState, createContext, useContext } from "react";
import { ModalContext } from "./ModalContext";
import cloneDeep from "lodash.clonedeep";

const CombatantContext = createContext();

const CombatantContextProvider = (props) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [combatantList, setCombatantList] = useState([]);

  if (score !== score) {
    setScore("Set Score!");
  } else if (score === "") {
    setScore("Set Score!");
  }

  if (name === "") {
    setName("Set Name!");
  }

  const { handleCloseModal, combatantType, combatantRowColor } =
    useContext(ModalContext);

  const showType = false

  const handleCombatantSubmit = (e) => {
    e.preventDefault();
    const newCombatant = { combatantType, name, score, combatantRowColor, showType };
    addCombatant(newCombatant);
    setName("")
    setScore("")
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

  const handleTypeChange = (newType, newRowColor, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].combatantType = newType;
    updatedCombatantList[index].combatantRowColor = newRowColor;
    updatedCombatantList[index].showType = false;
    setCombatantList(updatedCombatantList);
  };

  const handleNameChange = (newName, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    if (newName === "") {
      updatedCombatantList[index].name = "Set Name!";
      setCombatantList(updatedCombatantList);
    } else {
    updatedCombatantList[index].name = newName;
    setCombatantList(updatedCombatantList);
    };
  };

  const handleScoreChange = (newScore, index) => {
    const updatedCombatantList = cloneDeep(combatantList);
    updatedCombatantList[index].score = newScore;
    setCombatantList(updatedCombatantList);
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
        handleTypeChange,
        handleNameChange,
        handleScoreChange,
      }}
    >
      {props.children}
    </CombatantContext.Provider>
  );
};

export { CombatantContext, CombatantContextProvider };
