import React from 'react';
import './App.css';

import {  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
const HatPage = () =>{

  return (
    <div>Here comes JSX !</div>
);
};

function App() {
  return (
    <div >

      <Routes>          
           <Route  path='/' element={<Homepage/>} exact/>
           <Route path='/shop/hats' element={<HatPage/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
