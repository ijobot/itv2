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
  background-image: url(${stones});
  background-repeat: repeat;
  background-size: 200%;
  background-position: 50% 50%;
  background-blend-mode: multiply;
  padding: 1rem;
  border: 5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 100px 1000px rgba(0, 0, 0, 0.8);
  width: 600px;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 2fr 1rem 1fr;
  grid-template-rows: auto 1rem auto auto;
  z-index: 20;

  @media only screen and (max-width: 820px) {
    width: 500px;
    position: absolute;
    top: 50%;
  }

  @media only screen and (max-width: 520px) {
    width: 380px;
    position: absolute;
    h1 {
      font-size: 35px;
    }
    top: 50%;
    input {
      height: 30px;
    }
  }

  @media only screen and (max-width: 380px) {
    width: 300px;
    position: absolute;
    h1 {
      font-size: 30px;
    }
    top: 50%;
    input {
      height: 30px;
    }
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
