import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import BookShelves from 'Scopes/BookShelves/BookShelves';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/:slug" component={BookShelves} />
        <Redirect to="/all" />
      </Switch>
    </div>
  </Router>
);

export default App;
