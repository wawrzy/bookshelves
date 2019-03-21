import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from 'Scopes/Errors/404/404'

const App = () => (
  <Router>
    <div>
      <Route path="/" component={NotFound} />
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
