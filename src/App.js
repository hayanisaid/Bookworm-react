import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './components/pages/homepage';
import Login from './components/pages/login';

class App extends Component {
  render() {
    return (
      <Router>
         <div className="container">
         <Route exact path='/' component={HomePage}/>
         <Route path="/login" component={Login}/>
         </div>
      </Router>
    )
  }
}

export default App;
