import React, { useState } from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import LinkAddForm from '../components/folder/linkAddForm';
import SearchBar from '../components/folder/searchBar';
import styled from 'styled-components';
import { useUserLinkData } from '../hooks/useFolderState';
import MainHeader from '../components/folder/mainHeader';
import FolderLinkCard from '../components/folder/folderLinkCard';
import addIcon from '../assets/images/add_white.svg';

function Folder() {
  const [activeFolderId, setActiveFolderId] = useState(null);
  const { linkList } = useUserLinkData(activeFolderId);

  const handleFolderClick = id => {
    setActiveFolderId(id);
  };

  function renderLinks(linkList) {
    if (!linkList.data || linkList.data.length === 0) {
      return <EmptyFolder>저장된 링크가 없습니다</EmptyFolder>;
    }

    return linkList.data.map(link => <FolderLinkCard key={link.id} link={link} />);
  }

  return (
    <>
      <Header />
      <LinkAddForm />

      <FolderContent>
        <SearchSection>
          <SearchBar />
        </SearchSection>
        <FolderView>
          <MainHeader activeFolderId={activeFolderId} onFolderClick={handleFolderClick} />
        </FolderView>
        <FolderLinkGridContainer>{renderLinks(linkList)}</FolderLinkGridContainer>
        <FloatingActionButton>
          <FabP>폴더추가</FabP> <AddImage src={addIcon} alt="폴더추가 버튼" />
        </FloatingActionButton>
      </FolderContent>
      <Footer />
    </>
  );
}

const FabP = styled.p`
  color: #e7effb;
  text-align: center;
  font-size: 16px;
`;
const AddImage = styled.img`
  width: 16px;
  height: 16px;
`;
const FloatingActionButton = styled.button`
  display: none;
  @media screen AND (min-width: 357px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 24px;

    position: fixed; /* 화면에 고정 */
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 101px; /* 하단에서 101px 떨어진 위치 */
    z-index: 1; /* 다른 요소 위에 나타나도록 z-index 설정 */
    border-radius: 20px;
    border: 1px solid #fff;
    background: #6d6afe;
  }
`;
const EmptyFolder = styled.p`
  grid-column: 1 / span 3;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
const FolderLinkGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 20px;
`;
const FolderContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1060px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const FolderView = styled.section`
  display: flex;
  max-width: 1060px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export default Folder;
