import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de incluir Routes
import './App.css';
import Home from './components/Home';
import PersonDetail from './components/PersonDetail';

function App() {
  return (
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PersonDetail />} />
        </Routes>
      </div>
  );
}

export default App;