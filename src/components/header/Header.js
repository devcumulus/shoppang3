import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { TopBar } from "./styles/topbarStyle";
import { HeaderBt } from "./styles/headerBtStyle";
import { HeaderHr } from "./styles/headerHrStyle";
import { TopFix } from "./styles/headerTopFix";
import { Link } from "react-router-dom";
import { SmallBtnStyles } from "../../styles/common";

const Header = () => {
  return (
    <TopFix>
      <TopBar>
        <Link to="/cart/cartall">
          <div className="top-left">
            <img src="/assets/images/headerImages/logo.svg" alt="log" />
            <h1>SHOPPANG</h1>
          </div>
        </Link>
        <div className="top-right">
          <SmallBtnStyles>로그인</SmallBtnStyles>
          <img src="/assets/images//headerImages/Avatar.svg" alt="" />
        </div>
      </TopBar>
      <HeaderHr />
    </TopFix>
  );
};

export default Header;
