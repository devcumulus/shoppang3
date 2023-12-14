import React from "react";
import styled from "@emotion/styled";
import Title from "../../components/joonseo/Title";
import CardContainer from "../../components/joonseo/CardContainer";

import BtnAll from "../../components/joonseo/BtnAll";
import BtnList from "../../components/joonseo/BtnList";
import BtnComplete from "../../components/joonseo/BtnComplete";
import BtnAdd from "../../components/joonseo/BtnAdd";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
`;

const Cart = () => {
  return (
    <div>
      <Title />
      <StyledContainer>
        <BtnAll />
        <BtnList />
        <BtnComplete />
      </StyledContainer>

      <CardContainer />
    </div>
  );
};

export default Cart;
