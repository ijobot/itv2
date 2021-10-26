import React from "react";
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  grid-column-start: 2;
  grid-row-start: 2;
  font-size: 3rem;
  font-weight: bold;
  color: #6a5d83;
  line-height: 1;
  background-color: #222422;
  border: 2px solid #6a5d83;
  padding: 0.5rem;
  padding-bottom: 0.9rem;
`;

const MainTitle = () => {
  return <StyledMainTitle>Initiative Tracker</StyledMainTitle>;
};

export default MainTitle;
