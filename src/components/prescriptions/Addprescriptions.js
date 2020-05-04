import React from "react";
import styled from "styled-components";
import Header from "../../reusables/Header.js";
import LeftSide from "./LeftSide";
import AllCards from "../prescriptionCard/AllCards";

const Addprescriptions = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <LeftSide />
        <AllCards />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.section`
  display: flex;
`;

export default Addprescriptions;
