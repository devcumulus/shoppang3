import styled from "@emotion/styled";
import React from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import BtnAll from "../../components/card/components/BtnAll";
import BtnComplete from "../../components/card/components/BtnComplete";
import BtnList from "../../components/card/components/BtnList";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
`;

const CartCompleted = () => {
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
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartCompleted;
