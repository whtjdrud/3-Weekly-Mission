import React from 'react';
import { timeSince, convertDate } from '../utils/dateUtils';
import PropTypes from 'prop-types';

function MainCard({ link }) {
  return (
    <section className="card">
      <a href={link.url} target="_blank" rel="noreferrer">
        <div className="card-image">
          <img src={link.imageSource} alt="강의 메인 이미지" />
        </div>
        <div className="card-content">
          <div className="time-posted">
            <p>{timeSince(link.createdAt)}</p>
          </div>
          <div className="card-text">
            <p>{link.description}</p>
          </div>
          <div className="card-date">
            <p>{convertDate(link.createdAt)}</p>
          </div>
        </div>
      </a>
    </section>
  );
}
MainCard.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default MainCard;
