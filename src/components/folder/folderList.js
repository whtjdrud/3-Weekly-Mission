import React from 'react';
import PropTypes from 'prop-types';
import { FolderButton, StyledFolderList } from './folderList.style';

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

export default FolderList;
