import React from 'react';
import {HashRouter as Router, Route, browserHistory} from 'react-router-dom';
import MainContainer from '../containers/Main/MainContainer';
import {Home} from "../components/Home";

const routes = (
  <Router history={browserHistory}>
    <Router path="/" component={MainContainer}>
      <Route component={Home}/>
    </Router>
  </Router>
);

export default routes;