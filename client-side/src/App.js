import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import {
  Nav,
  Dashboard,
} from './components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />  
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
