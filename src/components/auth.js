import React from 'react';
import { withRouter } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/header.js';
import Photos from '../components/photos.js';

import { unsplash } from '../api/unsplashAPI.js';


const Auth = () => {
  if (localStorage.getItem('token')) {
    unsplash.auth.setBearerToken(localStorage.getItem('token'))
  } else {
    const code = window.location.search.split('code=')[1]
    if (code) {
      unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('token', json.access_token)
          unsplash.auth.setBearerToken(json.access_token)
        })
    } else {
      return (
        <Route exact path="/home">
          <Redirect to="/login" />
        </Route>
      )
    }
  }
  return (
    <div> 
      <Header />
      <Photos />
    </div>
  )
}


export default withRouter(Auth)

