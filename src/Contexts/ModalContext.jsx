import React, { useState, createContext } from "react";

const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalColor, setModalColor] = useState("");
  const [combatantType, setCombatantType] = useState("");
  const [modalDirective, setModalDirective] = useState(
    "Enter Character Details"
  );
  const [combatantRowColor, setCombatantRowColor] = useState("");

  const handleOpenModal = (e, color, combatantType, directive) => {
    e.currentTarget.blur();
    setModalColor(color);
    setCombatantType(combatantType);
    setCombatantRowColor(color);
    setModalDirective(directive);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalDirective,
        combatantType,
        combatantRowColor,
        modalColor,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
