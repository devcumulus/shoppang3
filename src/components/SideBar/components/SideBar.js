import React from "react";
import { About } from "../styles/AboutStyle";
import { Basket } from "../styles/BasketStyle";
import { Event } from "../styles/EventStyle";
import { Login } from "../styles/LoginStyle";
import { Shopping } from "../styles/ShoppingStyle";
import { SideBarItem } from "../styles/SideBarStyle";
import { SideBarWrap } from "../styles/SideBarWrapStyle";
import { Link } from "react-router-dom";

const SideBar = () => {

  // const [isHovered, setIsHovered] = useState(false) ;
  return (
    <>
      <SideBarItem>
        <SideBarWrap>
          <Login>
            <img src="../assets/images/headerImages/Avatar.svg" alt="login" />
            <br />
            <div>
              <p>로그인</p>
              <span>이메일로 회원가입 하기</span>
            </div>
          </Login>
          <About>
            <p>소개</p>
                <Link to="/about">
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img
                  src="../assets/images/headerImages/about.svg"
                  alt="about"
                />
                <span>About</span>
              </li>
            </ul>
                </Link>
          </About>
          <Basket>
            <p>장바구니</p>
            <Link to="/cart">
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/list.svg" alt="about" />
                <span>장볼것</span>
              </li>
            </ul>
            </Link>
            <Link to="/mart">
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/cart.svg" alt="cart" />
                <span>장본것</span>
              </li>
              </ul>
            </Link>
            <Link to="/event">
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/all.svg" alt="all" />
                <span>모두보기</span>
              </li>
            </ul>
            </Link>
          </Basket>
          <Shopping>
            <p>쇼핑하기</p>
            <Link to="/mart">
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/store.svg" alt="" />
                <span>근처 매장찾기</span>
              </li>
            </ul>
            </Link>
          </Shopping>
          <Event>
            <p>이벤트</p>
            <Link to="/event">
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/heart.svg" alt="" />
                <span>쇼핑하기 좋은 날</span>
              </li>
            </ul>
            </Link>
            <Link to="/event">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/headerImages/notice.svg" alt="" />
                  <span>게시판</span>
                  </li>
              </ul>
            </Link>
            <Link to="/event">
              <ul>
                <li>
                  <div className="hoverbox"></div>
                  <img src="../assets/images/headerImages/app.svg" alt="" />
                  <span>비즈니스 앱</span>
                </li>
              </ul>
            </Link>
          </Event>
        </SideBarWrap>
      </SideBarItem>
    </>
  );
};

export default SideBar;
