import React from 'react';
import { timeSince, convertDate } from '../../utils/dateUtils';
import PropTypes from 'prop-types';
import default_thumnail from '../../assets/images/index/default-thumbnail.png';
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
            <CardImage src={default_thumnail} alt="강의 메인 이미지" />
          )}
        </CardImageDiv>
        <CardContent>
          <TimePosted>
            <p>{timeSince(link.created_at)}</p>
          </TimePosted>
          <CardText>
            <p>{link.description}</p>
          </CardText>
          <CardDate>
            <p>{convertDate(link.created_at)}</p>
          </CardDate>
        </CardContent>
      </Link>
    </Card>
  );
}

const Card = styled.div`
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
