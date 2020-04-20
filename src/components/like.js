import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { setLike, deleteLike } from '../redux/actions/index.js';

import '../styles/like.css';


const Like = ({ likeCount, photoId, isLiked, deleteLike, setLike, photoData }) => {

  const style = isLiked ? 'liked' : 'like'

  const selectedPhoto = photoData.filter(el =>
    el.id === photoId)[0]

  const toggleLike = debounce(photoId => {
    selectedPhoto.isLiked
      ? deleteLike(photoId)
      : setLike(photoId)
  }, 500)

  return (

    <div className="gallery__item__likes">

      <span className={style} 
        onClick={() =>
          toggleLike(photoId) 
        }
      ></span>
      <span className="text">
        {likeCount}
      </span>

    </div>
  )

}

const mapStateToProps = state => {
  return {
    photoData: state.photoViewer.photoData,
  }
}

export default connect(
  mapStateToProps, { setLike, deleteLike })(Like)

