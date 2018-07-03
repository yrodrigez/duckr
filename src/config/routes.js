import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import MainContainer from '../containers/Main/MainContainer';
import {Home} from "../components/Home";

const routes = (
  <Router>
    <Router path="/" component={MainContainer}>
      <Route  component={Home}/>
    </Router>
  </Router>
);

export default routes;