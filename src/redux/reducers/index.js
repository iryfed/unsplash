const initialState = {
  photoData: [],
  currentPage: 1,
  isFetching: false,
  errorMessage: null,
  detailPhoto: null,
}

const setPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PHOTO_REQUEST':
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      }
    case 'GET_PHOTO_SUCCESS':
      return {
        ...state,
        photoData: [...state.photoData, ...action.photos],
        isFetching: false,
        errorMessage: null,
        currentPage: state.currentPage + 1,
      }
    case 'GET_PHOTO_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    case 'SET_LIKE': {
      const photos = [...state.photoData]
      const indexLikedPhoto = photos.findIndex(el => {
        return el.id === action.photoId
      })
      photos[indexLikedPhoto].isLiked = true
      photos[indexLikedPhoto].likes++
      return {
        ...state,
        photoData: photos,
      } }
    case 'DELETE_LIKE': {
      const photos = [...state.photoData]
      const indexLikedPhoto = photos.findIndex(el => {
        return el.id === action.photoId
      })
      photos[indexLikedPhoto].isLiked = false
      photos[indexLikedPhoto].likes--
      return {
        ...state,
        photoData: photos,
      } }
    default:
      return state
  }
}

export default setPhotoReducer
