import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addIcon from '../../assets/images/add.svg';
import { Link } from 'react-router-dom';
import MainIconButton from './mainIconButton';
import FolderList from './folderList';

function MainHeader({ folderList, activeFolderId, onFolderClick }) {
  const activeFolderName = folderList.find(folder => folder.id === activeFolderId)?.name;
  const MainIconButtons = ['삭제', '수정', '공유'];

  const handleFolderClick = event => {
    const folderId = event.target.getAttribute('data-id');
    if (folderId === 'all') {
      onFolderClick(null);
    } else {
      onFolderClick(Number(folderId));
    }
  };

  const renderHeaderButtons = (MainIconButtons, activeFolderName) => {
    if (!activeFolderName) {
      return null;
    }
    return MainIconButtons.map(text => <MainIconButton key={text} text={text} />);
  };

  return (
    <FolderLinkHeader>
      <MainNav>
        <FolderList folderList={folderList} activeFolderId={activeFolderId} onFolderClick={handleFolderClick} />
        <Link to="#">
          <FolderAdd>
            폴더 추가 <FolderAddIcon src={addIcon} alt="폴더 추가 아이콘" />
          </FolderAdd>
        </Link>
      </MainNav>

      <HeaderTitle>
        <MainTitle>{activeFolderName || '전체'}</MainTitle>
        <HeaderButtons>{renderHeaderButtons(MainIconButtons, activeFolderName)} </HeaderButtons>
      </HeaderTitle>
    </FolderLinkHeader>
  );
}

const FolderLinkHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;
const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
const HeaderTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MainTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MainNav = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;

const FolderAdd = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 4px;
`;

const FolderAddIcon = styled.img`
  width: 16px;
  height: 16px;
`;
MainHeader.propTypes = {
  folderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string,
      name: PropTypes.string,
      user_id: PropTypes.number,
      favorite: PropTypes.bool,
      link: PropTypes.shape({ count: PropTypes.number }),
    }),
  ).isRequired,

  activeFolderId: PropTypes.number,
  onFolderClick: PropTypes.func.isRequired,
};

export default MainHeader;
