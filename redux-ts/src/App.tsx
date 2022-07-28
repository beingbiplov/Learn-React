import React from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Toolkit</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
