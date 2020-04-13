import React from 'react';
import { Link } from 'react-router-dom';

import Like from '../components/like.js';


const Photo = ({ photo }) => {
  const {
    id,
    created,
    photoImgSmall,
    authorProfileAvatar,
    authorName,
    authorProfileLink,
    authorUserName,
    isLiked,
    likes,
  } = photo

  return (
    <li
     className="gallery__item" key={id}>
     
      <div className="gallery__item__attrs">

        <div className="gallery__item__header">
          <div className="gallery__item__user">
            <a href={authorProfileLink} target="_blank">
              <img 
               src={authorProfileAvatar}
              />
              {authorName}
            </a>
          </div>
          <div
           className="gallery__item__created">
           {created}
          </div>
        </div>

        <Link
         className="gallery__item__detail_link" 
         to={{
         pathname: `/photos/${id}`,
         state: { modal: true },
         photoId: id,
         }}>
        </Link>


        <div className="gallery__item__footer">

            <Like
             likeCount={likes} 
             photoId={id}
             isLiked={isLiked}
            />

        </div>

      </div>

      <img
       className="gallery__item__img"
       src={photoImgSmall}
      />

    </li>
  )
}

export default Photo
