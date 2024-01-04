import React from 'react';
import styled from 'styled-components';
import linkIcon from '../../assets/images/link.svg';
function AddLink() {
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
const SearchSection = styled.section`
  padding: 60px 320px 90px 320px;
  width: 100%;
  margin-top: 0;
  background: #f0f6ff;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: #fff;
`;
const AddButton = styled.button`
  width: 80px;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AddLinkInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
`;
const SearchLinkIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default AddLink;
