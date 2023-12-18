import React from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { Common, PageLayoutStyle, TitleStyle } from "../../styles/common";
import styled from "@emotion/styled";
import { Store } from "./styles/StoreStyle";
import { Contents } from "./styles/ContentsStyle";
import { ContentLeft } from "./styles/ContentLeftStyle";
import { Map } from "./styles/MapStyle";
import { ContentRight } from "./styles/ContentRightStyle";
import { ContentCard } from "./styles/ContentCardStyle";
import { CardTop } from "./styles/CardTopStyle";
import { CardBut } from "./styles/CardButStyle";
import { CardString, CardText } from "./styles/CardStringStyle.js";

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
                      <img
                        src="../assets/images/martImages/emart.jpg"
                        alt="emart"
                      />
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                </ContentCard>
              </ContentLeft>
              <ContentRight>
                <ContentCard>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CardString>
                        <CardTop>
                          <p>이마트-성서점</p>
                          <span>Subtitle</span>
                        </CardTop>
                        <CardBut>
                          <span>
                            Supporting or descriptive text for the card goes
                            here like a pro.
                          </span>
                          <button>BUTTON</button>
                          <button>BUTTON</button>
                        </CardBut>
                      </CardString>
                    </li>
                  </ul>
                </ContentCard>
              </ContentRight>
            </Contents>
          </Store>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Mart;
