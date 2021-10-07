import React, { useReducer } from 'react';
import './App.css';
import UseStateHook from './components/UseStateHook.js';
import ClassCounter from './components/ClassCounter.js';

import UseEffectHook from './components/UseEffectHook.js';

import ComponentC from './components/ComponentC.js';

import UseReducer1 from './components/UseReducer1.js';
import UseReducer2 from './components/UseReducer2.js';
import ComponentA from './components/ComponentA.js';
import UseReducer3 from './components/UseReducer3.js';

import ClickCounter from './components/ClickCounter.js';

import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInpput';

import Prac1 from './components/pract1';
import Practice from './components/Practice.js';
import PracticeClass from './components/PracticeClass';

import Parent from './components/Parent(CtoP)';

import HoverHOC from './components/HoverCounter.js';
import RenderPropsCounter from './components/RenderPropsCounter';
import RenderPropsClick from './components/RenderPropsClick';

// Redux
import { Provider } from 'react-redux';
import store from './components/redux/CakeStore.js';
import CakeContainer from './components/CakeContainer';
import HoverCounter from './components/HoverCounter.js';
import AbcA from './components/abcA';
import UseCountCounter from './components/UseCountCounter.js';

export const UserContext = React.createContext();
export const InnerContext = React.createContext();

export const CountContext = React.createContext();


export const AbcContext = React.createContext('sk');

function App() {
  const iniState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'Increment':
        return state + 1;
      case 'Decrement':
        return state - 1;
      case 'Reset':
        return iniState;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, iniState)
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <UseStateHook /> */}

      {/* <ClassCounter /> */}
      {/* <UseEffectHook /> */}
      {/* <UserContext.Provider value='sk'>
        <InnerContext.Provider value={', Hello'}>
          <ComponentC />
        </InnerContext.Provider>
      </UserContext.Provider> */}

      {/* <UseReducer1 /> */}
      {/* <UseReducer2 /> */}
      {/* <CountContext.Provider value={{countState : count, countDispatch: dispatch}}>
        Count : {count}
        <ComponentA />
      </CountContext.Provider> */}
      {/* <UseReducer3/> */}
     
     {/* HOC */}
     {/* <ClickCounter name='Soumi' /> */}

     {/* <FocusInput /> */}
     {/* <FRParentInput /> */}
     {/* <HoverCounter name={"ck"} /> */}
     {/* <RenderPropsCounter render={(count, incrementCount) => <RenderPropsClick count={count} incrementCount={incrementCount} />
     } /> */}
     {/* <RenderPropsCounter>
       {(count, incrementCount) => <RenderPropsClick count={count} incrementCount={incrementCount} />}
     </RenderPropsCounter> */}
     {/* <AbcContext.Provider value="ck"> */}
       {/* <AbcA /> */}
       <UseCountCounter />
     {/* </AbcContext.Provider> */}
     {/* <Practice val={5} /> */}

      {/* <CountContext.Provider value={{c: count, d: dispatch}}>
        <Practice />
      </CountContext.Provider> */}
      {/* <PracticeClass /> */}

      {/* Redux */}
      {/* <CakeContainer /> */}

      {/* <Parent /> */}

     {/* <Prac1/> */}
    </div>
    </Provider>
  );
}

export default App;
