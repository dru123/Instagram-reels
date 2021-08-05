import React, { createContext, useContext } from 'react';
const MyContext = createContext(1);


const MyComponent = () => (
 <>
 <p>{useContext(MyContext)}</p>
 <MyContext.Provider value={2}>
 <p>{useContext(MyContext)}</p>
 </MyContext.Provider>
 </>
);
export default MyComponent
// usecontext jis component k ander call hota h uske bhr jkr check krta h jo value hoti h wo leta 
//provider  h toh usee value leta h nhi toh context s leta h ....
//is q m 9 line wala usecontext k uperr jitni mrzi provider ho wo apne mycomponent k bhr jkr check krke default value utha lega

///agr 9 line ki value chnge krna chthe ho toh bhr ek provider d do....
// mycompent k brh


//<MyCOntext.Provider value-{3}>
// const MyComponent = () => (
//     <>
//     <p>{useContext(MyContext)}</p>
//     <MyContext.Provider value={2}>
//     <p>{useContext(MyContext)}</p>
//     </MyContext.Provider>
//     </>
// );
//<MyCOntext.Provider>


//provider kbhi bhi use context k upper chepne s kamm nhi chlta hmesha useContext jis component  kk nder h uske provider s kam krta h ........