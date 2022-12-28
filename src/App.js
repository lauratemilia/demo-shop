import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import './utils/utility-classes.css';
import { Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import Home from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
import Terms from './pages/Terms';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';
import ViewAllProducts from './pages/ViewAllProducts';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const queryClient = new QueryClient()

    return(
      <QueryClientProvider client={queryClient} contextSharing={true}>
      <div>  
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
            <Route path='/register' element={<Register/>}/> 
            <Route exact path="/reset" element={<Reset />} />          
            <Route path='/about' element={<About/>}/>    
            <Route path='/terms-and-conditions' element={<Terms/>}/>    
            <Route path='/category/:categoryName' element={<Category/>}/>   
            <Route path='/all/*' element={<ViewAllProducts/>}/>  
            <Route path='/categories' element={<Categories/>}/>  
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
      </div>
      </QueryClientProvider>
    );
  }
}

export default App;
