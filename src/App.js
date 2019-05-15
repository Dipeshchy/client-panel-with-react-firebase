import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { UserIsAuthenticated,UserIsNotAuthenticated } from './helper/auth'

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <AppNavbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
          <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
          <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
          <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
          <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
