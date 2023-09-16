import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PlayerGrid from './components/PlayerGrid/PlayerGrid';
import TestCSV from './components/testCSV';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PlayerGrid/>
    </div>
  );
}

export default App;
