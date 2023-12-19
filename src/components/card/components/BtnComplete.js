import React from "react";
import { LeageBtnStyles } from "../../../styles/common";
import { useNavigate } from "react-router";

const BtnComplete = () => {
    const navigate = useNavigate();
  const handleClickCompleted = () => {
  navigate("/cart/cartCompleted")
  }
  return (
    <div>
      <LeageBtnStyles type="button" onClick={handleClickCompleted}>장 본것</LeageBtnStyles>
    </div>
  );
};

export default BtnComplete;
