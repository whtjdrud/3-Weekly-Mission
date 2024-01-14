import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal';
import PropTypes from 'prop-types';
import ModalButton from './CommonModalStyles';

const FolderNameChange = ({ toggleModal, folderName }) => {
  const [name, setName] = useState(folderName);

  return (
    <Modal toggleModal={toggleModal}>
      <ModalInput type="text" value={name} onChange={e => setName(e.target.value)} placeholder="내용 입력" />
      <ModalButton onClick={() => {}}>변경하기</ModalButton>
    </Modal>
  );
};

const ModalInput = styled.input`
  display: flex;
  width: 100%;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #6d6afe;

  flex-shrink: 1;
`;

FolderNameChange.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  folderName: PropTypes.string.isRequired,
};
export default FolderNameChange;
