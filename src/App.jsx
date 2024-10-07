import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import "./index.css"
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
