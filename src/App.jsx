import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './history';
import { Board } from './pages/Board';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { CardDetails } from './cmps/CardDetails';

export function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <nav>
          <h3>Logo</h3>
          <Link to="/login">Login</Link> |
        <Link to="/">Logout</Link> |
        <Link to="/board/:id">board</Link> |
        </nav>


        <Switch>

          <Route path="/" component={Home} exact />
          <Route path="/board/:id" component={Board} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/card-details" component={CardDetails} exact />

        </Switch>
      </Router>
    </React.Fragment>
  );
}