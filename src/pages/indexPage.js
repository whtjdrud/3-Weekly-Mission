import React from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import MainCard from '../components/index/mainCard';
import useFolderState from '../hooks/useFolderState';
import searchIcon from '../assets/images/index/Search.svg';
function IndexPage() {
  const { folder } = useFolderState();

  return (
    <div>
      <Header />
      <div className="hero-header">
        <div className="header-image">
          <img className="hero-header-img" src={folder.folder.owner.profileImageSource} alt="" />
          <p>@{folder.folder.owner.name}</p>
        </div>
        <h1 className="slogan">{folder.folder.name}</h1>
      </div>
      <article className="main_article">
        <div className="search_bar">
          <form action="#">
            <input type="search" id="search-bar_input" name="search-bar" placeholder="링크를 검색해 보세요." style={searchBarStyle} />
          </form>
        </div>

        <div className="grid-container">
          {folder.folder.links.map(link => (
            <MainCard key={link.id} link={link} />
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
}

const searchBarStyle = {
  backgroundImage: `url(${searchIcon})`,
};

export default IndexPage;
