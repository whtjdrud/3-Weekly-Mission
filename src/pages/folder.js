import React from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import searchIcon from '../assets/images/index/Search.svg';
import AddLink from '../components/folder/addLink';
function Folder() {
  return (
    <>
      <Header />
      <AddLink />

      <article className="main_article">
        <div className="search_bar">
          <form action="#">
            <input type="search" id="search-bar_input" name="search-bar" placeholder="링크를 검색해 보세요." style={searchBarStyle} />
          </form>
        </div>
      </article>
      <Footer />
    </>
  );
}

const searchBarStyle = {
  backgroundImage: `url(${searchIcon})`,
};

export default Folder;
