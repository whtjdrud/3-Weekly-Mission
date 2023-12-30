import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Footer from './footer.js';
import searchIcon from '../assets/images/index/Search.svg';
import { getFolderData } from '../services/folderService';

function IndexPage() {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFolderData();
        setFolder(data);
      } catch (error) {
        console.error('폴더 데이터를 불러오는데 실패했습니다', error);
      }
    };

    fetchData();
  }, []);

  const renderMainCard = () => {
    if (folder) {
      return folder.folder.links.map(link => (
        <section key={link.id} className="card">
          <a href={link.url} target="_blank" rel="noreferrer">
            <div className="card-image">
              <img src={link.imageSource} alt="Card Image" />
            </div>
            <div className="card-content">
              <div className="time-posted">
                <p>{link.createdAt}</p>
              </div>
              <div className="card-text">
                <p>{link.description}</p>
              </div>
              <div className="card-date">
                <p>2023. 3. 15</p>
              </div>
            </div>
          </a>
        </section>
      ));
    }
  };

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

        <div className="grid-container">{renderMainCard()}</div>
      </article>
      <Footer />
    </div>
  );
}

const searchBarStyle = {
  backgroundImage: `url(${searchIcon})`,
};

export default IndexPage;
