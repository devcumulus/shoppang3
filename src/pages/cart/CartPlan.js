import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/components/SideBar";
import BtnAll from "../../components/card/components/BtnAll";
import BtnComplete from "../../components/card/components/BtnComplete";
import BtnList from "../../components/card/components/BtnList";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { PageLayoutStyle, TitleStyle } from "../../styles/common";
import { getProduct, postProduct } from "../../api/product/product_api";
import CardForm from "../../components/card/components/CardForm";
import { Modal } from "antd";
import CartAddEdit from "../../components/modal/components/CartAddEdit";

const StyledContainer = styled.div`
  display: flex;
  position: relative;
`;

const initPlanData = [];
const CartPlan = () => {
  const [isModal, setIsModal] = useState(true);
  const [planData, setPlanData] = useState(initPlanData);
  // 사용자 pk
  const [userPk, setUserPk] = useState(1);
  // 보기방식 정의
  const [choiceList, setChoiceList] = useState(0);
  useEffect(() => {
    getProduct(userPk, choiceList, setPlanData);
  }, []);

  const handleClickPlanGet = (productNm, categoryPk, memo) => {
    postProduct({
      userPk: userPk,
      categoryPk: categoryPk,
      productNm: productNm,
      memo: memo,
    });
  };

  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <PageLayoutStyle>
          <CartAddEdit
            btn="취소하기"
            btnAct="추가하기"
            handleClick={handleClickPlanGet}
          />
          <TitleStyle>
            <h2>장바구니 살목록</h2>
            <span>장바구니 목록을 추가하고 관리하세요</span>
          </TitleStyle>
          <StyledContainer>
            <BtnAll />
            <BtnList>
              <div onClick={handleClickPlanGet}></div>
            </BtnList>
            <BtnComplete />
            <div>
              {planData.map(item => (
                <CardForm key={item.productPk} item={item} />
              ))}
            </div>
          </StyledContainer>
        </PageLayoutStyle>
      </Main>
    </>
  );
};

export default CartPlan;
