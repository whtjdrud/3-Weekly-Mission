import React, { useState } from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import LinkAddForm from '../components/folder/linkAddForm';
import SearchBar from '../components/folder/searchBar';
import styled from 'styled-components';
import { useUserLinkData, useUserFolders } from '../hooks/useFolderState';
import MainHeader from '../components/folder/mainHeader';
import FolderLinkCard from '../components/folder/folderLinkCard';
function Folder() {
  const { folderList } = useUserFolders();
  const [activeFolderId, setActiveFolderId] = useState(null);

  const { linkList } = useUserLinkData(activeFolderId);

  const handleFolderClick = id => {
    setActiveFolderId(id);
  };

  return (
    <>
      <Header />
      <LinkAddForm />

      <FolderContent>
        <SearchSection>
          <SearchBar />
        </SearchSection>

        <FolderView>
          <MainHeader folderList={folderList.data} activeFolderId={activeFolderId} onFolderClick={handleFolderClick} />
        </FolderView>

        <FolderLinkGridContainer>
          {linkList.data.map(link => (
            <FolderLinkCard key={link.id} link={link} />
          ))}
        </FolderLinkGridContainer>
      </FolderContent>
      <Footer />
    </>
  );
}
const FolderLinkGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 20px;
`;
const FolderContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 1060px;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export default Folder;
