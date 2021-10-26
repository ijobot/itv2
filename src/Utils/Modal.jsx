import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";
import ModalControls from "./ModalControls";
import ModalDirective from "./ModalDirective";

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  box-shadow: 0px 0px 100px 1000px #000000bb;
  min-width: 400px;
  max-width: 40%;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 2fr 1rem 1fr;
  grid-template-rows: auto 1rem auto auto;
`;

const Modal = () => {
  const { showModal, modalColor } = useContext(ModalContext);

  return (
    <div>
      {showModal && (
        <StyledModal style={{ backgroundColor: modalColor }}>
          <ModalDirective />
          <ModalControls />
        </StyledModal>
      )}
    </div>
  );
};

export default Modal;
