import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/images/index/Search.svg';

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
const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  border-radius: 10px;
  background: #f5f5f5;
  justify-content: space-between;
  padding: 15px 16px;
  border: none;
  gap: 10px;
`;

const SearchLinkIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background: #f5f5f5;
  flex-grow: 1;
`;

export default SearchBar;
