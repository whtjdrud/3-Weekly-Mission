import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal';
import PropTypes from 'prop-types';
import ModalButton from './CommonModalStyles';
const FolderAdd = ({ toggleModal }) => {
  const [name, setName] = useState('');

  return (
    <Modal toggleModal={toggleModal}>
      <ModalInput type="text" value={name} onChange={e => setName(e.target.value)} placeholder="내용 입력" />
      <ModalButton onClick={() => {}}>추가하기</ModalButton>
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
  border: 1px solid #ccd5e3;
  background: #fff;
  flex-shrink: 1;
`;

FolderAdd.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default FolderAdd;
