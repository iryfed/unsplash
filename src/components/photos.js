import React from 'react';
import { connect } from 'react-redux';

import { unsplash, authenticationUrl } from '../api/unsplashAPI.js';
import { setPhoto } from '../redux/actions/index.js';
import Photo from '../components/photo.js';


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
    const { photos, isFetching, errorMessage } =this.props
    let num = 0

    return (
      <div
       className="container gallery">
        <ul
         className="gallery_col">
      {
        photos.map(photo =>
          <Photo
           key={num++}
           className=""
           photo={photo} 
          />
        )
      }
        </ul>
      </div>
    )
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

