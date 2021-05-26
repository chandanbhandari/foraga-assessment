import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Excercise1 from './features/Excercise1';
import Excercise2 from './features/Excercise2';
import Excercise3 from './features/Excercise3';
import Home from './features/Home';
import history from './history';

const ReactRouter: React.FC = (props) => (
  <React.Fragment>
    {console.log(">>>>>ppp", props)}
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/excercise-1" exact component={Excercise1} />
        <Route path="/excercise-2" exact component={Excercise2} />
        <Route path="/excercise-3" exact component={Excercise3} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </React.Fragment>
);

export default ReactRouter;
