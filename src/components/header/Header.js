import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { Common } from "../../styles/common";

const Header = () => {
  const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    .top-left {
      margin-left: 16px;
      padding: 26px 25px;
      .menuIcon {
        font-size: 24px;
        cursor: pointer;
      }
    }
    .top-right {
      display: flex;
      margin-right: 16px;
      align-items: center;
      gap: 6px;
      img {
        cursor: pointer;
      }
    }
  `;

  const HeaderBt = styled(Button)`
    background: #fff;
    color: #1a1a1a;
    padding: 4px 16px;
    border: 1px solid #1a1a1a;
    :hover {
      background: #1a1a1a;
      color: #fff !important;
      border: none;
    }
  `;

  const HeaderHr = styled.hr`
    color: ${Common.color.g600};
    width: 100vw;
    box-sizing: border-box;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  `;
  return (
    <>
      <TopBar>
        <div className="top-left">
          <MenuOutlined className="menuIcon" />
        </div>
        <div className="top-right">
          <HeaderBt>로그인</HeaderBt>
          <img src="/assets/images//headerImages/Avatar.svg" alt="" />
        </div>
      </TopBar>
      <HeaderHr />
    </>
  );
};

export default Header;
