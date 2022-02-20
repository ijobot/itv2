import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";

const StyledModalDirective = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  grid-column: 1/-1;
  grid-row: 1/2;
  padding: 0.5rem;
`;

const ModalDirective = () => {
  const { modalDirective } = useContext(ModalContext);

  return <StyledModalDirective>{modalDirective}</StyledModalDirective>;
};

export default ModalDirective;
