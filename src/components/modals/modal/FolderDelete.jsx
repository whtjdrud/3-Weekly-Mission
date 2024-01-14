import React from 'react';
import styled from 'styled-components';

import Modal from '../modal';
import PropTypes from 'prop-types';
import ModalButton from './CommonModalStyles';
const FolderDelete = ({ toggleModal, folderName }) => {
  return (
    <Modal toggleModal={toggleModal}>
      <FolderName>{folderName}</FolderName>
      <ModalButton onClick={() => {}}>삭제하기</ModalButton>
    </Modal>
  );
};

const FolderName = styled.p`
  color: #9fa6b2;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  flex-shrink: 1;
`;

FolderDelete.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  folderName: PropTypes.string.isRequired,
};
export default FolderDelete;
