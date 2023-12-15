import React from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";

const Mart = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>근처 매장찾기</h2>
            <span>근처 매장을 검색 하고 가까운 매장을 찾아보세요</span>
          </TitleStyle>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Mart;
