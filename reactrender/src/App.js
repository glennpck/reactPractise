import logo from './logo.svg';
import './App.css';
import UseState from './components/useState/UseState';
import UseReducer from './components/useReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import ArrayUseState from './components/ImmutableState/ArrayUseState';

function App() {
  return (
    <div className="App">
      <ArrayUseState />
      {/* <ObjectUseState /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
    </div>
  );
}

export default App;
