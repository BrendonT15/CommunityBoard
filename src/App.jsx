import React from "react";
import './App.css';
import CardGrid from './components/CardGrid';

const App = () => {
  return(
    <div className="App">
        <header>
          <h1>Brooklyn Eats</h1>
        </header>
        <CardGrid />
    </div>
  );
};

export default App;