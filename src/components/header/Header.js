import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { TopBar } from "./styles/topbarStyle";
import { HeaderBt } from "./styles/headerBtStyle";
import { HeaderHr } from "./styles/headerHrStyle";
import { TopFix } from "./styles/headerTopFix";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <TopFix>
      <TopBar>
        <Link to="/cart/cartAll">
          <div className="top-left">
            <img src="/assets/images/headerImages/logo.svg" alt="log" />
            <h1>SHOPPANG</h1>
          </div>
        </Link>
        <div className="top-right">
          <HeaderBt>로그인</HeaderBt>
          <img src="/assets/images//headerImages/Avatar.svg" alt="" />
        </div>
      </TopBar>
      <HeaderHr />
    </TopFix>
  );
};

export default Header;
