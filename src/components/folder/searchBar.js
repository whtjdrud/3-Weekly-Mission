import React from 'react';
import searchIcon from '../../assets/images/index/Search.svg';
import { SearchDiv, SearchInput, SearchLinkIcon } from './style/searchBar.style';

function SearchBar() {
  return (
    <form action="#">
      <SearchDiv>
        <SearchLinkIcon src={searchIcon} alt="돋보기 아이콘" />
        <SearchInput type="search" placeholder="링크를 검색해 보세요." />
      </SearchDiv>
    </form>
  );
}

export default SearchBar;
