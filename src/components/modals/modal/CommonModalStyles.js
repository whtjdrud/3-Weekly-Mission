import styled, { css } from 'styled-components';

// 공통 버튼 스타일
const commonButtonStyle = css`
  width: 100%;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ModalButton = styled.button`
  ${commonButtonStyle}
  background: ${props => props.background || 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)'};
`;

export default ModalButton;
