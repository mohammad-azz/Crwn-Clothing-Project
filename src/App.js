import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import {  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div >

      <Routes>          
           <Route  path='/' element={<Homepage/>} exact/>
           <Route path='/shop' element={<ShopPage/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
