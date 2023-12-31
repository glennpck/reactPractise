import React, {useReducer} from 'react'
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
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentG from './components/ComponentG';
import ComponentH from './components/ComponentH';
import ComponentI from './components/ComponentI';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';
import NewCounter from './components/NewCounter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import SpecialCounter from './components/SpecialCounter';
import SpecialCounter2 from './components/SpecialCounter2';
import UserForm from './components/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      <UserForm />
      {/* <SpecialCounter />
      <SpecialCounter2 /> */}
      {/* <DocTitleTwo />
      <DocTitleOne /> */}
      {/* <HookTimer /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <NewCounter /> */}
      {/* <DataFetching2 /> */}
      {/* <DataFetching1 /> */}
      {/* Count - {count}
      <ComponentG />
      <ComponentH />
      <ComponentI /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={'nnelg'}>
        <ChannelContext.Provider value={'pp'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounter1 /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
