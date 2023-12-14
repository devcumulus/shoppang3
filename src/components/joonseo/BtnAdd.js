import React from "react";
import { BtnStylesAdd } from "./BtnStyles";

const BtnAdd = ({ onAddCard }) => {
  return <BtnStylesAdd onClick={onAddCard}>추가 하기</BtnStylesAdd>;
};

export default BtnAdd;
