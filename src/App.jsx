import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './history';
import { Board } from './pages/Board';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

export function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <nav>
          <h3>Logo</h3>
          <Link to="/login">Login</Link> |
        <Link to="/">Logout</Link> |
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/board/:id" component={Board} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}