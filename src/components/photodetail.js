import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import PhotoDetailAttr from '../components/photodetailattr.js';


const PhotoDetail = ({ photoData, match: { params } }) => {

  const handleCloseModal = event => {
    event.stopPropagation()
    window.history.back()
  }

  const detailPhoto = photoData.filter(photo =>
    photo.id === params.id)[0]

  if (!detailPhoto || !photoData) {
    return (
      <Redirect to="/home" />
    )
  }

  return (
    <Modal
     center
     open
     onClose={handleCloseModal}
    >

     <PhotoDetailAttr detailPhoto={detailPhoto} />      

      <img 
       className="gallery__item__detail__img"
       src={detailPhoto.photoImgRegular} />

    </Modal>
  )
}


const mapStateToProps = state => {
  return {
    photoData: state.photoViewer.photoData,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(PhotoDetail)

