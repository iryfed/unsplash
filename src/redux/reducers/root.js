import { combineReducers } from 'redux'
import setPhotoReducer from '../../redux/reducers/index.js'

const rootReducer = combineReducers({
  photoViewer: setPhotoReducer,
})

export default rootReducer
