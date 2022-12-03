import React from 'react';
import './App.css';
import './utils/utility-classes.css';
import { Switch, Route } from "react-router-dom";
import Category from './pages/Category';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div>  
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>           
          <Route path='/about' component={About}/>    
          <Route path='/category/:categoryName' component={Category}/>     
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
