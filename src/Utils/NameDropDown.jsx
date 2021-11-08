import React from "react";
import styled from "styled-components";

const StyledNameDropDown = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: blue;
  width: 10rem;
  height: 10rem;
  z-index: 10;
`;

const NameDropDown = () => {
  return <StyledNameDropDown>name</StyledNameDropDown>;
};

export default NameDropDown;
