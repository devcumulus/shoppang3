import React from "react";
import { LeageBtnStyles } from "../../../styles/common";

const BtnAll = ({ onClick }) => {
  return (
    <div>
      <LeageBtnStyles type="button" onClick={onClick}>
        모두보기
      </LeageBtnStyles>
    </div>
  );
};

export default BtnAll;
