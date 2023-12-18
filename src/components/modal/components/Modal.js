import React from "react";
import { CartModal } from "../styles/CartModal";
import { ModalBack } from "../styles/modalBack";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalBack style={{ display: isOpen ? "block" : "none" }}>
      <CartModal>
        <header>장바구니 목록 추가</header>
        <input placeholder="상품이름을 입력해주세요" />
        <select>
          <option>카테고리를 선택해주세요</option>
          <option>생필품</option>
          <option>냉장보관</option>
          <option>냉동보관</option>
          <option>실온보관</option>
        </select>
        <input placeholder="메모를 입력해주세요" />
        <button onClick={closeModal}>{children}</button>
      </CartModal>
    </ModalBack>
  );
};

export default Modal;
