import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import {  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Header from './componens/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out'

function App() {

  return (
    <div >
      <Header/>
      <Routes>          
           <Route  path='/' element={<Homepage/>} exact/>
           <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/signin' element={<SignInAndSignOut/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
