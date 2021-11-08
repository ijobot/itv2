import React from "react";
import styled from "styled-components";
import "./App.css";

import Modal from "./Utils/Modal";
import MainTitle from "./Components/MainTitle";
import MenuDisplay from "./Components/MenuDisplay";
import CombatDisplay from "./Components/CombatDisplay";

import { ModalContextProvider } from "./Contexts/ModalContext";
import { CombatantContextProvider } from "./Contexts/CombatantContext";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr 3rem 4fr 3rem;
  grid-template-rows: 3rem auto 3rem 1fr 3rem;
  text-align: center;
  min-height: 100vh;
  background-color: #4f4066;
  background-image: url(https://p2.piqsels.com/preview/532/313/113/texture-concrete-grey-stone.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  font-size: 1rem;
`;

function App() {
  return (
    <ModalContextProvider>
      <CombatantContextProvider>
        <StyledApp>
          <Modal />
          <MainTitle />
          <MenuDisplay />
          <CombatDisplay />
        </StyledApp>
      </CombatantContextProvider>
    </ModalContextProvider>
  );
}

export default App;
