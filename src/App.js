import React from "react";
import styled from "styled-components";
import "./App.css";

import Modal from "./Utils/Modal";
import MainTitle from "./Components/MainTitle";
import MenuDisplay from "./Components/MenuDisplay";
import CombatDisplay from "./Components/CombatDisplay";

import { ModalContextProvider } from "./Contexts/ModalContext";
import { CombatantContextProvider } from "./Contexts/CombatantContext";
import { DropDownContextProvider } from "./Contexts/DropDownContext";
import stones from "../src/img/stones.jpg";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr 2rem 3.5fr 6rem;
  grid-template-rows: 2rem auto 2rem 1fr 2rem;
  text-align: center;
  min-height: 100vh;
  background-color: var(--borderColor);
  background-image: url(${stones});
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 1rem;
  background-blend-mode: multiply;
`;

function App() {
  return (
    <ModalContextProvider>
      <CombatantContextProvider>
        <DropDownContextProvider>
          <StyledApp>
            <Modal />
            <MainTitle />
            <MenuDisplay />
            <CombatDisplay />
          </StyledApp>
        </DropDownContextProvider>
      </CombatantContextProvider>
    </ModalContextProvider>
  );
}

export default App;
