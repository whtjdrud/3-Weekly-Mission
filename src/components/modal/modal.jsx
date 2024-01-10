import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import closedImage from '../../assets/images/modal/close.svg';

const Modal = ({ toggleModal }) => {
  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <ModalContainer onClick={onCloseModal}>
      <ModalDiv>
        <Closed src={closedImage} onClick={onCloseModal}></Closed>
      </ModalDiv>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
const ModalDiv = styled.div`
  width: 360px;
  height: 240px;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;

  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
  gap: 24px;
`;
const Closed = styled.img`
  width: 24px;
  height: 24px;
`;
Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default Modal;
