import styled from "@emotion/styled";
import React from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import Header from "../../components/header/Header";
import BtnAll from "../../components/joonseo/BtnAll";
import BtnComplete from "../../components/joonseo/BtnComplete";
import BtnList from "../../components/joonseo/BtnList";
import CardContainer from "../../components/joonseo/CardContainer";
import Main from "../../components/main/Main";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
`;

const Cart = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>장바구니 목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
          </TitleStyle>
          <StyledContainer>
            <BtnAll />
            <BtnList />
            <BtnComplete />
          </StyledContainer>
          <CardContainer />
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Cart;
