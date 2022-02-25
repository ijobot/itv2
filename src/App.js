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
  grid-template-columns: 3rem 230px 2rem auto 3rem;
  grid-template-rows: 3rem auto 2rem 1fr 3rem;
  grid-template-areas:
    ". . . . ."
    ". title . display ."
    ". . . display ."
    ". buttons . display ."
    ". . . . .";
  text-align: center;
  min-height: 100vh;
  background-color: var(--backgroundColor);
  background-image: url(${stones});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    height: 1200px;
    width: 1200px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--outerFlame) 0%,
      5%,
      transparent 70%,
      transparent 100%
    );
    left: -700px;
    top: -600px;
    z-index: 1;
    animation: flicker 0.95s alternate-reverse infinite;
    animation-timing-function: steps(6, jump-none);
    animation-delay: 250ms;
  }

  &::after {
    content: "";
    position: absolute;
    height: 1200px;
    width: 1200px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--outerFlame) 0%,
      5%,
      transparent 70%,
      transparent 100%
    );
    right: -700px;
    top: -600px;
    z-index: 1;
    animation: flicker 0.75s alternate-reverse infinite;
    animation-timing-function: steps(6, jump-none);
  }

  @keyframes flicker {
    25% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1.125);
    }
    75% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 1500px) {
    grid-template-columns: 6em 230px 2rem 3.5fr 6rem;
  }

  @media only screen and (max-width: 1030px) {
    grid-template-columns: 2em 210px 2rem 3.5fr 2rem;
    grid-template-rows: 2rem auto 2rem 1fr 2rem;
    grid-template-areas:
      ". . . . ."
      ". title . display ."
      ". . . display ."
      ". buttons . display ."
      ". . . . .";
  }

  @media only screen and (max-width: 820px) {
    height: 0px;
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: 2rem min-content 2rem min-content 2rem auto 2rem;
    grid-template-areas:
      ". . ."
      ". title ."
      ". . ."
      ". buttons ."
      ". . ."
      ". display ."
      ". . .";
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1rem 1fr 1rem;
    grid-template-rows: 1rem min-content 1rem min-content 1rem auto 1rem;
    grid-template-areas:
      ". . ."
      ". title ."
      ". . ."
      ". buttons ."
      ". . ."
      ". display ."
      ". . .";
  }
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
