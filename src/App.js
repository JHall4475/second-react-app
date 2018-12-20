import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Views/Login'
import Profile from './Views/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component ={Login}/>
         <Route path='/login' component={Login}/>
         <Route path='/profile' component={Profile}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
