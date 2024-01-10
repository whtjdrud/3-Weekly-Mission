import React from 'react';
import { timeSince, convertDate } from '../../utils/dateUtils';
import PropTypes from 'prop-types';
import default_thumbnail from '../../assets/images/index/default-thumbnail.png';
import star from '../../assets/images/star.svg';
import kebab from '../../assets/images/kebab.svg';

import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDate,
  CardImage,
  CardImageDiv,
  CardText,
  KebabImage,
  StarImage,
  TimePosted,
} from './style/folderLinkCard.style';

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
        </CardImageDiv>
        <CardContent>
          <TimePosted>{timeSince(link.created_at)}</TimePosted>
          <CardText>{link.description}</CardText>
          <CardDate>{convertDate(link.created_at)}</CardDate>
        </CardContent>
      </Link>
      <StarImage src={star} alt={'즐겨찾기버튼'} />
      <KebabImage src={kebab} />
    </Card>
  );
}

FolderLinkCard.propTypes = {
  link: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_source: PropTypes.string,
  }).isRequired,
};
export default FolderLinkCard;
