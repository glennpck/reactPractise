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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp';
import './appStyles.css'
import styles from './appStyles.module.css'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counterer from './components/Counterer';
import ComponentD from './components/ComponentD';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='nnelg'>
        <ComponentD />
      </UserProvider>
      {/* <Counterer render={(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>}/>
      <Counterer render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>}/> */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => isLoggedIn ? "nnelg": "Guest"}/> */}
      {/* <ClickCounter name='nnelg'/>
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName='batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
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
