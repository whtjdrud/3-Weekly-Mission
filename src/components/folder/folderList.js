import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FolderList = ({ folderList, activeFolderId, onFolderClick }) => {
  return (
    <StyledFolderList onClick={onFolderClick}>
      <FolderButton data-id="all">전체</FolderButton>
      {folderList.map(folder => (
        <FolderButton key={folder.id} data-id={folder.id} active={folder.id === activeFolderId}>
          {folder.name}
        </FolderButton>
      ))}
    </StyledFolderList>
  );
};

FolderList.propTypes = {
  folderList: PropTypes.array.isRequired,
  activeFolderId: PropTypes.number,
  onFolderClick: PropTypes.func.isRequired,
};

const StyledFolderList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const FolderButton = styled.button`
  padding: 8px 12px;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.active ? '#6d6afe' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border: 1px solid #6d6afe;
`;

export default FolderList;
