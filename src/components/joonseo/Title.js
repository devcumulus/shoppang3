import React from "react";
import Header from "../header/Header";
import styled from "@emotion/styled";
import { Memo } from "./CardForm";

const TitleContainer = styled.div``;

const TitleText = styled.h1`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
`;

const Title = () => {
  return (
    <TitleContainer>
      <Header />
      <TitleText>장바구니 목록</TitleText>
      <Memo style={{ marginLeft: "0" }}>
        장바구니 목록을 추가하고 관리하세요
      </Memo>
    </TitleContainer>
  );
};

export default Title;
