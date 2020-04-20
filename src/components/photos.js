import React from 'react';
import { connect } from 'react-redux';

import { unsplash, authenticationUrl } from '../api/unsplashAPI.js';
import { setPhoto } from '../redux/actions/index.js';
import Photo from '../components/photo.js';

import '../styles/photos.css';


class Photos extends React.Component {

  componentDidMount () {
    const { currentPage, setPhoto } = this.props
    unsplash.auth.setBearerToken(localStorage.getItem('token'))
    setPhoto(currentPage)
    window.addEventListener('scroll', this.handleScroll, false)
  }

  handleScroll = e => {
    e.preventDefault()
    const { currentPage, setPhoto } = this.props

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100) &&
    !this.props.isFetching) {
      setPhoto(currentPage)
    }
  }

  render () {
    const { photos, isFetching, errorMessage, currentPage, setPhoto } = this.props
    let num = 0
    
    if (errorMessage) {
      <div className="error">
        {errorMessage}
      </div>
    } else {

    return (
      <div
       className="container gallery">
        <ul
         className="gallery_col">
      {
        photos.map(photo =>
          <Photo
           key={num++}
           photo={photo} 
          />
        )
      }
        </ul>
        <button
         className="btn btn-more"
         onClick={ev => {
           if(!this.props.isFetching) {
             setPhoto(currentPage)
           }
        }}
        >
          загрузить еще фото
        </button>
      </div>
    )
  }
  }
}


const mapStateToProps = state => {
  return {
    photos: state.photoViewer.photoData,
    currentPage: state.photoViewer.currentPage,
    isFetching: state.photoViewer.isFetching,
    errorMessage: state.photoViewer.errorMessage
  }
}


export default connect(mapStateToProps, {
  setPhoto,
})(Photos)

