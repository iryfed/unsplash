import React from 'react';
import ReactDOM from 'react-dom';

import Like from '../components/like.js';

import '../styles/photodetailattr.css';

const PhotoDetailAttr = ({ detailPhoto }) => {
  const {
    id,
    authorUserName,
    authorProfileLink,
    authorProfileAvatar,
    created,
    likes,
    isLiked
  } = detailPhoto

  return (

        <div className="gallery__item__detail__attrs">

        <div className="gallery__item__header">
          <div className="gallery__item__user">
            <a href={authorProfileLink} target="_blank">
              <img
               src={authorProfileAvatar}
              />
              {authorUserName}
            </a>
          </div>
          <div
           className="gallery__item__created">
           {created}
          </div>
        </div>

        <div className="gallery__item__footer">
          <Like
           likeCount={likes}
           photoId={id}
           isLiked={isLiked}
          />
        </div>

      </div>
  )
}

export default PhotoDetailAttr
