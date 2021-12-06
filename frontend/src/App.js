import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreatePlayer from './Components/CreatePlayer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Players from './Components/Players';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/players" element={<Players />}/>
        <Route path="/create" element={<CreatePlayer />} />
      </Routes>

    </Router>
   
      
    
  );
}

export default App;
