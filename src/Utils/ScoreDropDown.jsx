import React, { useContext } from "react";
import styled from "styled-components";
import { CombatantContext } from "../Contexts/CombatantContext";
import { DropDownContext } from "../Contexts/DropDownContext";
import Button from "./Button";

const StyledScoreDropDown = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  z-index: 10;
  background-color: #0c0122;
  border: 2px solid #6a5d83;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
`;

const ScoreDropDown = ({ index }) => {
  const { ShowScoreDropDown, setShowScoreDropDown } = useContext(DropDownContext);
  const { handleScoreChange } = useContext(CombatantContext);

  const scoreOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const handleOnClick = (option) => {
    handleScoreChange(option, index);
    setShowScoreDropDown(false);
  }
  const optionsMap = scoreOptions.map((option) => (
    <Button
      key={option}
      style={{ marginBottom: "0rem" }}
      text={option}
      onClick={() => handleOnClick(option)}
      color="#6a5d83"
      small
    />
  ));
  return <StyledScoreDropDown>{optionsMap}</StyledScoreDropDown>;
};

export default ScoreDropDown;
