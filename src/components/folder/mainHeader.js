import React, { useState } from 'react';
import PropTypes from 'prop-types';
import addIcon from '../../assets/images/add.svg';
import { Link } from 'react-router-dom';
import MainIconButton from './mainIconButton';
import FolderList from './folderList';
import { FolderAdd, FolderAddIcon, FolderLinkHeader, HeaderButtons, HeaderTitle, MainNav, MainTitle } from './style/mainHeader.style';
import { useUserFolders } from '../../hooks/useFolderState';
import FolderNameChange from '../modals/modal/FolderNameChange';
import Modal from '../modals/modal';
import FolderDelete from '../modals/modal/FolderDelete';

const MAIN_ICON_BUTTONS = ['삭제', '수정', '공유'];

function MainHeader({ activeFolderId, onFolderClick }) {
  const { folderList } = useUserFolders();
  const [modalType, setModalType] = useState(null);
  const activeFolderName = folderList.data.find(folder => folder.id === activeFolderId)?.name;

  const toggleModal = type => {
    setModalType(type);
  };

  const handleFolderClick = event => {
    const folderId = event.target.getAttribute('data-id');
    if (folderId === 'all') {
      onFolderClick(null);
    } else {
      onFolderClick(Number(folderId));
    }
  };

  return (
    <>
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
          <HeaderButtons>
            {activeFolderName &&
              MAIN_ICON_BUTTONS.map(text => <MainIconButton key={text} text={text} toggleModal={() => toggleModal(text)} />)}
          </HeaderButtons>
        </HeaderTitle>
      </FolderLinkHeader>

      {modalType === '삭제' && (
        <Modal toggleModal={() => toggleModal()} title="폴더 삭제">
          <FolderDelete toggleModal={() => toggleModal()} folderName={activeFolderName}></FolderDelete>
        </Modal>
      )}
      {modalType === '수정' && (
        <Modal toggleModal={() => toggleModal()} title="폴더 이름 변경">
          <FolderNameChange toggleModal={() => toggleModal()} folderName={activeFolderName} />
        </Modal>
      )}
    </>
  );
}

MainHeader.propTypes = {
  activeFolderId: PropTypes.number,
  onFolderClick: PropTypes.func.isRequired,
};

export default MainHeader;
