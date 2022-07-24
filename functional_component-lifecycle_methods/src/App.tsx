import React from 'react';
import './App.css';
import UseStateComponent from './components/useStateComponent'
import UseEffectComponent from './components/useEffectComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < UseStateComponent />
        < UseEffectComponent />
      </header>
    </div>
  );
}

export default App;
