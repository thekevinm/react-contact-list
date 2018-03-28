import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import About from './About'
import Home from './Home'

class App extends Component {
  




  render() {
    return (
      <Router>
      <div>
        
        
          <div id="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/:id" component={About} />
            </Switch>
          </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
