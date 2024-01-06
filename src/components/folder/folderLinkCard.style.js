import styled from 'styled-components';

export const KebabImage = styled.img`
  position: absolute;
  bottom: 100px;
  right: 20px;
  z-index: 100;
  width: 21px;
  height: 17px;
`;
export const StarImage = styled.img`
  position: absolute;
  top: 15px; /* 위쪽으로부터의 거리 */
  right: 15px;
  width: 34px;
  height: 34px;
`;
export const Card = styled.div`
  position: relative;
  width: 340px;
  height: 334px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 20px;
  overflow: hidden;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
`;

export const CardImageDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 200px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`;

export const CardText = styled.p`
  text-overflow: ellipsis;
  height: 49px;
  max-width: 100%;
  overflow: hidden;
  color: #000;
  font-size: 1.6rem;
  line-height: 24px; /* 150% */
`;

export const TimePosted = styled.p`
  color: #666;
  font-size: 1.3rem;
`;

export const CardDate = styled.p`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
`;
