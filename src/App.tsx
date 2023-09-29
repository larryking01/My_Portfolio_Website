import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
import './App.css'



import Home from './Routes/Home'
import LearnTailwind from './Routes/LearnTailwind'

// routing.
import { BrowserRouter, Routes, Route } from 'react-router-dom' 






function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/learn-tailwind' element={ <LearnTailwind /> } />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
