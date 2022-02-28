import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { ModalContext } from "../Contexts/ModalContext";
import ModalControls from "./ModalControls";
import ModalDirective from "./ModalDirective";
import stones from "../../src/img/stones.jpg";

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 100px 1000px rgba(0, 0, 0, 0.8);

  width: 600px;
  height: auto;
  font-size: 1rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: auto;
  z-index: 20;

  &;h1 {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 820px) {
    width: 70%;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    &;button:last-of-type {
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
  }

`;

const Modal = () => {
  const { showModal, modalColor, setShowModal } = useContext(ModalContext);

  let ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showModal && ref.current && !ref.current?.contains(e.target))
        setShowModal(false);
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showModal, setShowModal]);

  return (
    <div>
      {showModal && (
        <StyledModal ref={ref} style={{ backgroundColor: modalColor }}>
          <ModalDirective />
          <ModalControls />
        </StyledModal>
      )}
    </div>
  );
};

export default Modal;
