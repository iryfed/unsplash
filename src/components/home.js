import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";


const Home = () => {
  const code =  window.location.search.split('code=')[1]
  if (localStorage.getItem('token') || code) {
    return (
      <Route exact path="/home">
        <Redirect to="/auth" />
      </Route>
    )
  } else {
    return (
      <Route exact path="/home">
        <Redirect to="/login" />
      </Route>
    )
  }
}

export default withRouter(Home)

