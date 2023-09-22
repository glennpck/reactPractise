import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      <HookCounter />
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;