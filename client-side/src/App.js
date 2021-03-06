import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import {
  Nav,
  Dashboard,
  Login,
  Doctor,
  Patient,
} from './components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />  
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/patients" exact component={Patient} />
          <Route path="/doctors" exact component={Doctor} />
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
