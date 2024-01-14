import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import closedImage from '../../assets/images/modal/close.svg';

const Modal = ({ toggleModal, title, children }) => {
  console.log(title);
  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <ModalDiv>
      <ModalContent>
        <div className="modal-header">
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton src={closedImage} onClick={onCloseModal}></ModalCloseButton>
        </div>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalDiv>
  );
};

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ModalTitle = styled.div`
  color: #373740;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ModalDiv = styled.div`
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
const ModalContent = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
  gap: 24px;
`;
const ModalCloseButton = styled.img`
  position: absolute;
  top: 15px; /* 위쪽으로부터의 거리 */
  right: 15px;
  width: 24px;
  height: 24px;
`;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Modal;
