import styled from "@emotion/styled";
import React from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";
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
    img {
      position: relative;
      width: 100%;
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
            <img src="/assets/images/aboutimages/about.png" alt="" />
          </AboutInfo>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default About;
