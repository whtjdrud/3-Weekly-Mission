import React from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import AddLink from '../components/folder/addLink';
import SearchBar from '../components/folder/searchBar';
function Folder() {
  return (
    <>
      <Header />
      <AddLink />

      <article className="main_article">
        <SearchBar />
      </article>
      <Footer />
    </>
  );
}

export default Folder;
