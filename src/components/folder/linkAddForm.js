import React from 'react';
import linkIcon from '../../assets/images/link.svg';
import { AddButton, AddLinkInput, SearchContainer, SearchLinkIcon, SearchSection } from './linkAddForm.style';
function LinkAddForm() {
  return (
    <SearchSection>
      <SearchContainer>
        <SearchLinkIcon src={linkIcon} alt="link 아이콘" />
        <AddLinkInput type="type" placeholder="링크를 추가해 보세요" />
        <AddButton>추가하기</AddButton>
      </SearchContainer>
    </SearchSection>
  );
}

export default LinkAddForm;
