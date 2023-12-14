import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/SideBar/components/SideBar";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";

const Mart = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>쇼핑하기 좋은날</h2>
            <span>핫딜 상품을 추천 받아보세요</span>
          </TitleStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Mart;
