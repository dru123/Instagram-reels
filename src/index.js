import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  Material from './Material';
import reportWebVitals from './reportWebVitals';
// import IntersectionDemo from './IntesectionDemo';
// import ContextParent from "./ContextParent";
// import Test from "./TestComponent/Test";
// import UseEffect from "./TestComponent/UseEffect";
// import MyComponent, { MyContext } from "./TestComponent/q1";


ReactDOM.render(
  <React.StrictMode>
  {/* <Material></Material>, */}
    <App />,
    {/* <IntersectionDemo></IntersectionDemo> */}
    {/* // <Test></Test>, */}
     {/* <Test></Test> */}
     {/* <UseEffect></UseEffect> */}
    {/* // <UseEffect></UseEffect>, */}
    {/* <ContextParent></ContextParent> */}
    {/* <MyContext.Provider value={3}>
  //     <MyComponent></MyComponent>
  //   </MyContext.Provider> */}
   {/* <App></App> */}

   </React.StrictMode>,
  
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
