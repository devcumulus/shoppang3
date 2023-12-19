import { useNavigate } from "react-router";
import { LeageBtnStyles } from "../../../styles/common";
import { useEffect } from "react";

const BtnList = () => {
  const navigate = useNavigate();
  const handleClickPlan = () => {
    navigate("/cart/cartplan");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <LeageBtnStyles type="button" onClick={handleClickPlan}>
        장 볼것
      </LeageBtnStyles>
    </div>
  );
};

export default BtnList;
