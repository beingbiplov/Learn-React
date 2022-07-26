import React from 'react';
import './App.css';
import UseStateComponent from './components/useStateComponent'
import UseEffectComponent from './components/useEffectComponent'
import ParentComponent from './components/useContext/parentComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < UseStateComponent />
        < UseEffectComponent />
        < ParentComponent />
      </header>
    </div>
  );
}

export default App;
