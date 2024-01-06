import styled from 'styled-components';

export const StyledFolderList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const FolderButton = styled.button`
  padding: 8px 12px;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.active ? '#6d6afe' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border: 1px solid #6d6afe;
`;
