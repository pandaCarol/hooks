import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseStateHooks from './useStates';
import WindowWidthReadJson from './useEffects';
import CounterAndBgToggle from './useMemos';
import FocusSavingPreviousInfo from './useRefs';
import BgToggle from './useContexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UseStateHooks />
    <WindowWidthReadJson />
    <CounterAndBgToggle />
    <FocusSavingPreviousInfo />
    <BgToggle />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
