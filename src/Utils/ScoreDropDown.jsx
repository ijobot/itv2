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
  background-color: var(--boxColor);
  border: 3px solid var(--borderColorLight);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;


  &;button {
    width: 2.1rem;
    font-size: 1rem;
    color: rgba(0, 0, 0, 1);
    padding: 0;
    height: 2.1rem;
    padding-bottom: 1px;
  }

  &::before {
    position: absolute;
    top: -9px;
    left: 50%;
    transform: translateX(-50%) rotateZ(135deg);
    content: " ";
    height: 10px;
    width: 10px;
    background-color: var(--boxColor);
    border-left: 3px solid var(--borderColorLight);
    border-bottom: 3px solid var(--borderColorLight);
    z-index: 15;
    overflow: visible;
  }

  @media only screen and (max-width: 900px) {
    left: -20%;
  }

  @media only screen and (max-width: 680px) {
    position: absolute;
    top: 110%;
    left: -50%;
    padding: 0.5rem;
    z-index: 10;
    background-color: var(--boxColor);
    border: 3px solid var(--borderColorLight);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
  }
 `;

const ScoreDropDown = ({ index }) => {
  const { showScoreDropDown, setShowScoreDropDown } =
    useContext(DropDownContext);
  const { handleScoreChange } = useContext(CombatantContext);

  const scoreOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const handleOnClick = (option) => {
    handleScoreChange(option, index);
    setShowScoreDropDown(!showScoreDropDown);
  };
  const optionsMap = scoreOptions.map((option) => (
    <Button
      tabindex="0"
      key={option}
      text={option}
      onClick={() => handleOnClick(option)}
      color="var(--generalColor)"
      noMargin
      small
    />
  ));
  return <StyledScoreDropDown>{optionsMap}</StyledScoreDropDown>;
};

export default ScoreDropDown;
