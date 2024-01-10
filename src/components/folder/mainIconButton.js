import React from 'react';
import PropTypes from 'prop-types';
import share_icon_path from '../../assets/images/share.svg';
import pen_icon_path from '../../assets/images/pen.svg';
import delete_icon_path from '../../assets/images/delete.svg';
import { MainHeaderButton, MainHeaderIcon } from './style/mainIconButton.style';

const MainIconButton = ({ text }) => (
  <MainHeaderButton>
    <MainHeaderIcon src={getIconPath(text)} />
    {text}
  </MainHeaderButton>
);

const getIconPath = text => {
  switch (text) {
    case '공유':
      return share_icon_path;
    case '수정':
      return pen_icon_path;
    case '삭제':
      return delete_icon_path;
    default:
      return ''; // 기본값 또는 오류 처리
  }
};

export default MainIconButton;
MainIconButton.propTypes = {
  text: PropTypes.string.isRequired,
};
