import React, { useState, createContext } from "react";

const DropDownContext = createContext();

const DropDownContextProvider = (props) => {

    const [showTypeDropDown, setShowTypeDropDown] = useState(false);
    const [showNameDropDown, setShowNameDropDown] = useState(false);
    const [showScoreDropDown, setShowScoreDropDown] = useState(false);
 

  return (
    <DropDownContext.Provider
      value={{
        showTypeDropDown,
        setShowTypeDropDown,
        showNameDropDown,
        setShowNameDropDown,
        showScoreDropDown,
        setShowScoreDropDown
      }}
    >
      {props.children}
    </DropDownContext.Provider>
  );
};

export { DropDownContext, DropDownContextProvider };
