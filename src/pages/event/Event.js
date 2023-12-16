import React from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { Common, PageLayoutStyle, TitleStyle } from "../../styles/common";
import styled from "@emotion/styled";
import { ContentCard } from "./styles/ContentCardstyle";
import { CardText } from "./styles/CardTextStyle";
import { CardTop } from "./styles/CardTopStyle";
import { CardBut } from "./styles/CardButStyle";
import { GoodDay } from "./styles/GoodDayStyle";








const Event = () => {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <TitleStyle>
            <h2>쇼핑하기 좋은날</h2>
            <span>핫딜 상품을 추천 받아보세요</span>
          </TitleStyle>
          <GoodDay>
            <div className="left">
              <ContentCard>
                <ul>
                  <li>
                    <img
                      src="../assets/images/martImages/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
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
                    </CardText>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../assets/images/martImages/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
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
                    </CardText>
                  </li>
                </ul>
              </ContentCard>
            </div>
            <div className="mid">
              <ContentCard>
                <ul>
                  <li>
                    <img
                      src="../assets/images/martImages/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
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
                    </CardText>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../assets/images/martImages/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
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
                    </CardText>
                  </li>
                </ul>
              </ContentCard>
            </div>
            <div className="right">
              <ContentCard>
                <ul>
                  <li>
                    <img
                      src="../assets/images/martImages/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
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
                    </CardText>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src="../assets/images/martImages/emart.jpg"
                      alt="emart"
                    />
                    <CardText>
                      <CardTop>
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
                    </CardText>
                  </li>
                </ul>
              </ContentCard>
            </div>
          </GoodDay>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default Event;
