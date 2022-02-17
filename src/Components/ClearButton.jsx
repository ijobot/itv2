import React, { useContext } from "react";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";

const ClearButton = () => {
  const { handleClearCombatants } = useContext(CombatantContext);

  return (
    <Button
      color="var(--functionButtonColor)"
      text="Clear All"
      onClick={(e) => handleClearCombatants(e)}
    />
  );
};

export default ClearButton;
