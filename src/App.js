import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Count from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Count /> */}
      {/* <Message /> */}
      {/* <Greet name="bro" heroName="Stepbro">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="sis" heroName="Stepsis">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="mom" heroName="Stepmom" /> */}
      {/* <Welcome name="bro" heroName="Stepbro" /> */}
      {/* <Welcome name="sis" heroName="Stepsis" />
      <Welcome name="mom" heroName="Stepmom" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
