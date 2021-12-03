import React from 'react';
import {BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route>
          //Players
        </Route>
        <Route>
          //Create New Players
        </Route>
      </Routes>

    </Router>
   
      
    
  );
}

export default App;
