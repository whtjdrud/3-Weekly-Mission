import React, { useState } from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import AddLink from '../components/folder/addLink';
import SearchBar from '../components/folder/searchBar';
import styled from 'styled-components';
import { useUserLinkData, useUserFolders } from '../hooks/useFolderState';
import MainHeader from '../components/folder/mainHeader';
import MainCard from '../components/folder/mainCard';
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
      <AddLink />
      <FolderMain>
        <SearchSection>
          <SearchBar />
        </SearchSection>
        <MainArticle>
          <MainHeader folderList={folderList.data} activeFolderId={activeFolderId} onFolderClick={handleFolderClick} />
        </MainArticle>
        <div className="grid-container">
          {linkList.data.map(link => (
            <MainCard key={link.id} link={link} />
          ))}
        </div>
      </FolderMain>
      <Footer />
    </>
  );
}

const FolderMain = styled.main`
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
const MainArticle = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export default Folder;
