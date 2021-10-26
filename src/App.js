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
  grid-template-columns: 2rem minmax(220px, 1fr) 2rem 3fr 2rem;
  grid-template-rows: 2rem auto 2rem 1fr 2rem;
  text-align: center;
  min-height: 100vh;
  background-color: #6a5d83;
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
