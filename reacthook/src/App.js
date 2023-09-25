import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter1 from './components/HookCounter1';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounter1 /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
