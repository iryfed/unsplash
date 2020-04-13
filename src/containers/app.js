import React from 'react';
import { connect } from 'react-redux';

import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';

import Home from '../components/home.js';
import Auth from '../components/auth.js';
import LoginForm from '../components/loginform.js';
import PhotoDetail from '../components/photodetail.js';
import PageNotFound from '../components/404.js';
import { setPhoto } from '../redux/actions/index.js';


class App extends React.Component {
  previousLocation = this.props.location

  componentDidUpdate (prevProps) {
    const { location } = this.props
    if (
      prevProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render () {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (
      <>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/home" component={Auth} />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/login" component={LoginForm} />

          <Route exact path="/404" component={PageNotFound} />
          <Route path="*" component={PageNotFound} />
        </Switch>

        {isModal ? <Route path="/photos/:id" component={PhotoDetail} /> : null}
      </>
    )
  }
}

export default withRouter(App)
