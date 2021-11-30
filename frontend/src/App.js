import React from 'react';
import {BrowserRouter as Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>

      <Navbar />
      {/* <Routes>
        
        <Route path="/">Home</Route>
        <Route path="/Player">Players</Route>
        <Route path="/Create">Create New Player</Route>
      </Routes> */}
    </div>
  );
}

export default App;
