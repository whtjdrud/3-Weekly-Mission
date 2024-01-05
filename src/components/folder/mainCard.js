import React from 'react';
import { timeSince, convertDate } from '../../utils/dateUtils';
import PropTypes from 'prop-types';
import default_thumnail from '../../assets/images/index/default-thumbnail.png';

function MainCard({ link }) {
  return (
    <section className="card">
      <a href={link.url} target="_blank" rel="noreferrer">
        <div className="card-image">
          {link.image_source ? (
            <img src={link.image_source} alt="강의 메인 이미지" />
          ) : (
            <img src={default_thumnail} alt="강의 메인 이미지" />
          )}
        </div>
        <div className="card-content">
          <div className="time-posted">
            <p>{timeSince(link.created_at)}</p>
          </div>
          <div className="card-text">
            <p>{link.description}</p>
          </div>
          <div className="card-date">
            <p>{convertDate(link.created_at)}</p>
          </div>
        </div>
      </a>
    </section>
  );
}
MainCard.propTypes = {
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
export default MainCard;
