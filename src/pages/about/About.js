import React from "react";
import Header from "../../components/header/Header";
import styled from "@emotion/styled";
import Main from "../../components/main/Main";
import SideBar from "../../components/SideBar/components/SideBar";
import { Common, PageLayoutStyle, TitleStyle } from "../../styles/common";
const About = () => {
  const AboutInfo = styled.div`
    .about-txet {
      display: flex;
      margin-bottom: 60px;
    }
    p {
      width: 312px;
      height: 63px;
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .about-txet-img {
      width: 642px;
      height: 360px;
      margin-left: 95px;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <AboutInfo>
            <TitleStyle>
              <h2>About service</h2>
              <span>우리의 서비스를 소개합니다</span>
            </TitleStyle>
            <div className="about-txet">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="about-txet-img">
                <img src="/assets/images/aboutImages/Vector.svg" alt="" />
              </div>
            </div>
            <div className="about-txet">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="about-txet-img">
                <img src="/assets/images/aboutImages/Vector.svg" alt="" />
              </div>
            </div>
          </AboutInfo>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default About;
