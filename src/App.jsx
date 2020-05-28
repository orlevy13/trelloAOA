import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { history } from './history';
import { Board } from './pages/Board';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Card } from './cmps/Card';
import { MainNav } from './cmps/MainNav';
import { Boards } from './pages/Boards';
import { Dashboard } from './pages/Dashboard';

export function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <MainNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/board/:id" component={Board} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/board/:boardId/card/:cardId" component={Card} exact />
          <Route path="/board/:id/dashboard" component={Dashboard} />
          <Route path="/boards" component={Boards} exact />

        </Switch>
      </Router>
    </React.Fragment>
  );
}