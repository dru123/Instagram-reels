export const NameContext = React.createContext();
export const AgeContext = React.createContext();
export class ProviderComponent extends Component { render() {
 return (
 <NameContext.Provider value="Backbencher">
 <AgeContext.Provider value="23">
 <Test2 />
 </AgeContext.Provider>
 </NameContext.Provider>
 );
 }
}
//component jis provider k ander call hota h use provider ki  value leta h agr wah provider define  nhi h toh default value leta h

 import React, { useContext} from 'react';
function Test2() {
    let name= useContext(NameContext);
    let age= useContext(AgeContext);
    return (
        <div>
            {name},{age}
        </div>
    )
}

export default q10
