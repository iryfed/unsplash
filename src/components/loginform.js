import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import { authenticationUrl } from '../api/unsplashAPI.js';

import '../styles/loginform.css';

const LoginForm = () => {
  const onAutorization = () => {
    window.location.assign(authenticationUrl)
  } 
  if (localStorage.getItem('token')) {
    return (
      <Route exact path="/">
        <Redirect to="/auth" />
      </Route>
    )
  } else {
    return (
      <div className="container">
        <div className="login">
          <h1>Пожалуйста, авторизуйтесь</h1>
          <button
            className="btn btn-submit"
            onClick={onAutorization}
          >
          вход
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm)

