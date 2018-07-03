import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import MainContainer from '../containers/Main/MainContainer';

const routes = (
  <Router>
    <Route exact path="/" component={MainContainer}/>
  </Router>
);

export default routes;