import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import SideBar from "../../components/SideBar/components/SideBar";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";
import styled from "@emotion/styled";

const Store = styled.div`
  position: relative;
  display: flex;
  width: 1062px;
  margin-top: 80px;
`;
const Map = styled.div`
  position: relative;
  display: flex;
  img {
    position: relative;
    width: 342px;
    height: 614px;
  }
`;
const Contents = styled.div`
  position: relative;
`;
const ContentLeft = styled.div`
  position: relative;
  img {
    overflow: hidden;
  }
`;
const ContentRight = styled.div`
  position: relative;
`;
const ContentCard = styled.div`
  position: relative;
  margin-left: 36px;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  ul {
    width: 328px;
    height: auto;
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
  }
  span {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;
  }
`;
const CardTop = styled.div`
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
  img {
    position: relative;
    width: 328px;
    height: 184px;
  }
`;
const CardBut = styled.div`
  position: relative;
  span {
    margin-bottom: 16px;
  }
  button {
    position: relative;
    width: 89px;
    height: 36px;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    margin-right: 12px;
    font-size: 14px;
  }
`;

const Mart = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>근처 매장찾기</h2>
            <span>근처 매장을 검색 하고 가까운 매장을 찾아보세요</span>
          </TitleStyle>
          <Store>
            <Map>
              <img src="../assets/images/martImages/map.svg" alt="map" />
            </Map>
            <Contents>
              <ContentLeft>
                <ContentCard>
                  <ul>
                    <li>
                      <CardTop>
                        <img
                          src="../assets/images/martImages/emart.jpg"
                          alt="emart"
                        />
                        <p>이마트-성서점</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardTop>
                        <p>나이스 마트</p>
                        <span>Subtitle</span>
                      </CardTop>
                      <CardBut>
                        <span>
                          Supporting or descriptive text for the card goes here
                          like a pro.
                        </span>
                        <button>BUTTON</button>
                        <button>BUTTON</button>
                      </CardBut>
                    </li>
                  </ul>
                </ContentCard>
              </ContentLeft>
              <ContentRight>
                <ul>
                  <li>
                    <CardTop>
                      <p>나이스 마트</p>
                      <span>Subtitle</span>
                    </CardTop>
                    <CardBut>
                      <span>
                        Supporting or descriptive text for the card goes here
                        like a pro.
                      </span>
                      <button>버튼</button>
                      <button>버튼</button>
                    </CardBut>
                  </li>
                </ul>
              </ContentRight>
            </Contents>
          </Store>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Mart;
