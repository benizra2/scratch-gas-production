import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import SingleRepo from './SingleRepo.js';

class PrivateRoute extends Component {
  render() {
    return ((this.props.isAuth) ? <this.props.component {...this.props}/> : <Redirect to='/repo' />);
  }
}

export default PrivateRoute;