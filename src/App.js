import React from 'react';
import './App.css';
import './utils/utility-classes.css';
import { Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Page404 from './pages/Page404';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div>  
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/register' element={<Register/>}/> 
            <Route exact path="/reset" element={<Reset />} />          
            <Route path='/about' element={<About/>}/>    
            <Route path='/terms-and-conditions' element={<Terms/>}/>    
            <Route path='/category/:categoryName' element={<Category/>}/>     
            <Route path='*' element={<Page404/>}/>
          </Routes>
      </div>
    );
  }
}

export default App;
