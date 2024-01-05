import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import addIcon from '../../assets/images/add.svg';
import { Link } from 'react-router-dom';
import share_icon_path from '../../assets/images/share.svg';
import pen_icon_path from '../../assets/images/pen.svg';
import delete_icon_path from '../../assets/images/delete.svg';

function MainHeader({ folderList, activeFolderId, onFolderClick }) {
  const activeFolderName = folderList.find(folder => folder.id === activeFolderId)?.name;

  console.log(activeFolderName);
  const handleFolderClick = event => {
    const folderId = event.target.getAttribute('data-id');
    if (folderId === 'all') {
      onFolderClick(null);
    } else {
      onFolderClick(Number(folderId));
    }
  };

  return (
    <FolderLinkHeader>
      <MainNav>
        <FolderList onClick={handleFolderClick}>
          <FolderButton data-id="all">전체</FolderButton>
          {folderList.map(folder => (
            <FolderButton key={folder.id} data-id={folder.id} $active={folder.id === activeFolderId}>
              {folder.name}
            </FolderButton>
          ))}
        </FolderList>
        <Link to="#">
          <FolderAdd>
            폴더 추가 <FolderAddIcon src={addIcon} alt="폴더 추가 아이콘" />
          </FolderAdd>
        </Link>
      </MainNav>

      <HeaderTitle>
        <MainTitle>{activeFolderName || '전체'}</MainTitle>

        {activeFolderName !== undefined && (
          <HeaderButtons>
            <PenButton />
            <ShareButton />
            <DeleteButton />
          </HeaderButtons>
        )}
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
const MainHeaderIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const MainHeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 600;
  background: #fff;
  border: none;
`;

const DeleteButton = () => (
  <MainHeaderButton>
    <MainHeaderIcon src={delete_icon_path} />
    삭제
  </MainHeaderButton>
);

const PenButton = () => (
  <MainHeaderButton>
    <MainHeaderIcon src={pen_icon_path} />
    수정
  </MainHeaderButton>
);

const ShareButton = () => (
  <MainHeaderButton>
    <MainHeaderIcon src={share_icon_path} />
    공유
  </MainHeaderButton>
);
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
const FolderList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const FolderButton = styled.button`
  ${props => (props.active ? activeStyle : inactiveStyle)}
  padding: 8px 12px;
  align-items: center;
  border-radius: 5px;
`;

const activeStyle = css`
  border: 1px solid #6d6afe;
  background: #6d6afe;
  color: #fff;
`;

const inactiveStyle = css`
  border: 1px solid #6d6afe;
  background: #fff;
  color: #000;
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
