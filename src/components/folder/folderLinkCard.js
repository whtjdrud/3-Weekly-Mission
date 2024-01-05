import React from 'react';
import { timeSince, convertDate } from '../../utils/dateUtils';
import PropTypes from 'prop-types';
import default_thumbnail from '../../assets/images/index/default-thumbnail.png';
import star from '../../assets/images/star.svg';
import kebab from '../../assets/images/kebab.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function FolderLinkCard({ link }) {
  return (
    <Card>
      <Link to={link.url} target="_blank" rel="noreferrer">
        <CardImageDiv>
          {link.image_source ? (
            <CardImage src={link.image_source} alt="강의 메인 이미지" />
          ) : (
            <CardImage src={default_thumbnail} alt="강의 메인 이미지" />
          )}

          <StarImage src={star} alt={'즐겨찾기버튼'} />
        </CardImageDiv>
        <CardContent>
          <TimePosted>{timeSince(link.created_at)}</TimePosted>
          <CardText>{link.description}</CardText>
          <CardDate>{convertDate(link.created_at)}</CardDate>
        </CardContent>
      </Link>

      <KebabImage src={kebab} />
    </Card>
  );
}

const KebabImage = styled.img`
  position: absolute;
  bottom: 100px;
  right: 20px;
  z-index: 100;
  width: 21px;
  height: 17px;
`;
const StarImage = styled.img`
  position: absolute;
  top: 15px; /* 위쪽으로부터의 거리 */
  right: 15px;
  width: 34px;
  height: 34px;
`;
const Card = styled.div`
  position: relative;
  width: 340px;
  height: 334px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 20px;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
`;

const CardImageDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 200px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`;

const CardText = styled.p`
  text-overflow: ellipsis;
  height: 49px;
  max-width: 100%;
  overflow: hidden;
  color: #000;
  font-size: 1.6rem;
  line-height: 24px; /* 150% */
`;

const TimePosted = styled.p`
  color: #666;
  font-size: 1.3rem;
`;

const CardDate = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
`;

FolderLinkCard.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_source: PropTypes.string,
    folder_id: PropTypes.number,
  }).isRequired,
};
export default FolderLinkCard;
