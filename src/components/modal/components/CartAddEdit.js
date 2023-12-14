import React, { useState } from "react";
import Modal from "./Modal";

const CartAddEdit = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <button onClick={openModal}>{props.btn}</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {props.btn}
      </Modal>
    </>
  );
};

export default CartAddEdit;
