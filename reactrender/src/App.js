import logo from './logo.svg';
import './App.css';
import UseState from './components/useState/UseState';
import UseReducer from './components/useReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';
import Parent from './components/ParentChild/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';
import Grandparent from './components/Optimization/Grandparent';

function App() {
  return (
    <div className="App">
      <Grandparent />
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
    </div>
  );
}

export default App;
