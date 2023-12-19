import React from "react";
import { LeageBtnStyles } from "../../../styles/common";
import { useNavigate } from "react-router-dom";

const BtnAll = () => {
  const navigate = useNavigate();
  const handleClickAll = () => {
    navigate("/cart/cartall");
  };
  return (
    <div>
      <LeageBtnStyles type="button" onClick={handleClickAll}>
        모두보기
      </LeageBtnStyles>
    </div>
  );
};

export default BtnAll;
