import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";

const StyledModalDirective = styled.h1`
  color: #000000;
  font-size: 1.6rem;
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
