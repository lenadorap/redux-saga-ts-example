import React from 'react';

import './App.css';
import Counter from './features/counter/Counter';

const  App:React.FC=()=> {
  return (
    <div className="App">
      <h1>Redux Toolkit + Redux-Saga + TypeScript Example</h1>
      <Counter />
    </div>
  );
}

export default App;
