import React, { useContext } from "react";
import { CombatantContext } from "../Contexts/CombatantContext";
import Button from "../Utils/Button";

const ClearButton = () => {
  const { handleClearCombatants } = useContext(CombatantContext);

  return (
    <div>
      <Button
        color="#6a5d83"
        text="Clear Combatants"
        onClick={(e) => handleClearCombatants(e)}
      />
    </div>
  );
};

export default ClearButton;
