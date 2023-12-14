import React from "react";
import styled from "@emotion/styled";
import CardComplete from "./CardComplete";
import { BtnStylesCard } from "./BtnStyles";

const CardContainer = styled.div`
  position: relative;
  top: 63px;
  width: 328px;
  height: 180px;
  margin: 0 40px 40px 0;

  padding: 16px, 0px, 16px, 0px;
  border: 1px solid #292929;
  border-radius: 8px;
`;

const Heading = styled.h2`
  padding-left: 16px;
  padding-top: 16px;

  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const Category = styled.p`
  padding-left: 16px;
  padding-top: 4px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;

  color: #757575;
`;

export const Memo = styled.p`
  margin: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  //styleName: Text/R14px_standard;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #757575;
`;

const CardForm = () => {
  return (
    <CardContainer>
      <CardComplete>
        <Heading>상품이름</Heading>
        <Category>카테고리</Category>

        <Memo>
          Memo: Supporting or descriptive text for the card goes here like a
          pro. Memo: Supporting or descriptive text for the card goes here like
          a pro.
        </Memo>
      </CardComplete>
      <BtnStylesCard type="button">수정</BtnStylesCard>
      <BtnStylesCard type="button">삭제</BtnStylesCard>
    </CardContainer>
  );
};

export default CardForm;
