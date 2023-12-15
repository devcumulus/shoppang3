import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const SideBar = styled.section`
    position: relative;
    width: 245px;
    height: 950px;
  `;
  const SideBarWrap = styled.div`
    position: relative;
    width: 220px;
    height: 100%;
    margin-left: 25px;
    font-size: 14px;

    ul {
      position: relative;
      li {
        position: relative;
        display: flex;
        /* padding-top: 10px; */
        height: 32px;
        align-items: center;
        margin-top: 16px;
        img {
          margin-right: 16px;
        }
      }
    }

    /* background-color: yellowgreen; */
  `;
  const Login = styled.div`
    position: relative;
    width: 220px;
    height: auto;
    padding: 16px;
    img {
      position: relative;
      margin-top: 12px;
    }
    p {
      position: relative;
      font-size: 20px;
      margin-top: 24px;
      cursor: pointer;
    }
    span {
      position: relative;
      color: #666;
      line-height: 24px;
      cursor: pointer;
    }
    /* background-color: lavender; */
  `;

  const About = styled.div`
    position: relative;
    width: 220px;
    height: auto;
    padding: 16px;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;

    p {
      position: relative;
      color: #666;
    }
    li {
      position: relative;
      width: 195px;
      height: 32px;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        .hoverbox {
          position: absolute;
          width: 195px;
          height: 32px;
          border-radius: 8px;
          left: -16px;
          background-color: #a8a8a8;
          opacity: 35%;
        }
        span {
          position: relative;
          z-index: 1;
        }
        img {
          z-index: 1;
          opacity: 100%;
        }
      }
      img {
        width: 20px;
        height: 20px;
        opacity: 35%;
      }
    }

    /* background-color: red; */
  `;
  const Basket = styled.div`
    position: relative;
    width: 220px;
    height: auto;
    padding: 16px;
    p {
      position: relative;
      color: #666;
    }
    li {
      position: relative;
      cursor: pointer;
      &:hover {
        .hoverbox {
          position: absolute;
          width: 195px;
          height: 32px;
          border-radius: 8px;
          left: -16px;
          background-color: #a8a8a8;
          opacity: 35%;
        }
        span {
          position: relative;
          z-index: 1;
        }
        img {
          z-index: 1;
          opacity: 100%;
        }
      }
      img {
        width: 20px;
        height: 20px;
        opacity: 35%;
      }
    }

    /* background-color: lavender; */
  `;
  const Shopping = styled.div`
    position: relative;
    width: 220px;
    height: auto;
    padding: 16px;
    p {
      position: relative;
      color: #666;
    }
    li {
      position: relative;
      cursor: pointer;
      &:hover {
        .hoverbox {
          position: absolute;
          width: 195px;
          height: 32px;
          border-radius: 8px;
          left: -16px;
          background-color: #a8a8a8;
          opacity: 35%;
        }
        span {
          position: relative;
          z-index: 1;
        }
        img {
          z-index: 1;
          opacity: 100%;
        }
      }
      img {
        width: 20px;
        height: 20px;
        opacity: 35%;
      }
    }

    /* background-color: red; */
  `;
  const Event = styled.div`
    position: relative;
    width: 220px;
    height: auto;
    padding: 16px;
    p {
      position: relative;
      color: #666;
    }
    li {
      position: relative;
      cursor: pointer;
      &:hover {
        .hoverbox {
          position: absolute;
          width: 195px;
          height: 32px;
          border-radius: 8px;
          left: -16px;
          background-color: #a8a8a8;
          opacity: 35%;
        }
        span {
          position: relative;
          z-index: 1;
        }
        img {
          z-index: 1;
          opacity: 100%;
        }
      }
      img {
        width: 20px;
        height: 20px;
        opacity: 35%;
      }
    }
  `;

  // const [isHovered, setIsHovered] = useState(false) ;
  return (
    <>
      <SideBar>
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
          </About>
          <Basket>
            <p>장바구니</p>
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/list.svg" alt="about" />
                <span>장볼것</span>
              </li>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/cart.svg" alt="cart" />
                <span>장본것</span>
              </li>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/all.svg" alt="all" />
                <span>모두보기</span>
              </li>
            </ul>
          </Basket>
          <Shopping>
            <p>쇼핑하기</p>
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/store.svg" alt="" />
                <span>근처 매장찾기</span>
              </li>
            </ul>
          </Shopping>
          <Event>
            <p>이벤트</p>
            <ul>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/heart.svg" alt="" />
                <span>쇼핑하기 좋은 날</span>
              </li>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/notice.svg" alt="" />
                <span>게시판</span>
              </li>
              <li>
                <div className="hoverbox"></div>
                <img src="../assets/images/headerImages/app.svg" alt="" />
                <span>비즈니스 앱</span>
              </li>
            </ul>
          </Event>
        </SideBarWrap>
      </SideBar>
    </>
  );
};

export default SideBar;
