import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import Home from './Routes/Home'
import LearnTailwind from './Routes/LearnTailwind'

// routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import NavbarComponent from './MetaFiles/Navbar'




function App() {



  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/learn-tailwind' element={ <LearnTailwind /> } />
        <Route path='/navbar' element={ <NavbarComponent /> } />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
