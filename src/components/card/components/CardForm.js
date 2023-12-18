import React from "react";

import {
  CardBox,
  Heading,
  Category,
  Memo,
  CardFormBtn,
} from "../styles/CardStyles";
import { SmallBtnStyles } from "../../../styles/common";

const CardForm = () => {
  return (
    <CardBox>
      <Heading>상품이름</Heading>
      <Category>카테고리</Category>
      <Memo>
        Memo: Supporting or descriptive text for the card goes here like a pro.
      </Memo>
      <CardFormBtn>
        <SmallBtnStyles type="button">수정</SmallBtnStyles>
        <SmallBtnStyles type="button">삭제</SmallBtnStyles>
      </CardFormBtn>
    </CardBox>
  );
};

export default CardForm;
