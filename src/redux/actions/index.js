import { toJson } from 'unsplash-js';
import { unsplash } from '../../api/unsplashAPI.js';
import photosDataHelper from '../../helpers/photosDataHelper.js';


export const getPhotosRequest = () => {
  return {
    type: 'GET_PHOTO_REQUEST'
  }
}

export const getPhotosSuccess = (photos) => {
  return {
    type: 'GET_PHOTO_SUCCESS',
    photos: photosDataHelper(photos)
  }
}

export const getPhotosFailure = (errorMessage) => {
  return {
    type: 'GET_PHOTO_FAILURE',
    errorMessage
  }
}

export const likePhoto = (photoId) => {
  return {
    type: 'SET_LIKE',
    photoId
  }
}

export const unlikePhoto = (photoId) => {
  return {
    type: 'DELETE_LIKE',
    photoId
  }
}

export const setPhoto = (currentPage) => {
  return dispatch => {
    dispatch(getPhotosRequest())
    unsplash.photos.listPhotos(currentPage, 10, 'latest')
      .then(toJson)
      .then(photos => {
        dispatch(getPhotosSuccess(photos))
      })
      .catch(() => {
        dispatch(getPhotosFailure('Error! Please, try again'))
      })
  }
}

export const setLike = (photoId) => {
  return dispatch => {
    unsplash.photos.likePhoto(photoId)
      .then(() => {
        dispatch(likePhoto(photoId))
      })
      .catch(() => {
        dispatch(getPhotosFailure('Error! Please, try again'))
      })
  }
}

export const deleteLike = (photoId) => {
  return dispatch => {
    unsplash.photos.unlikePhoto(photoId)
      .then(() => {
        dispatch(unlikePhoto(photoId))
      })
      .catch(() => {
        dispatch(getPhotosFailure('Error! Please, try again'))
      })
  }
}
