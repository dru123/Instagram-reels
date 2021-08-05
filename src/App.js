// // import react, { useState, useEffect } from "react";
// // import './App.css';
// // import auth from "./firebase";

// // function App() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(false);
// //   const [loader, setLoader] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [mainLoader, setMainLoader] = useState(true);
// //   // user  -> user data
// //   // /loading -> loading
// //   // error -> show 
// //   const handleSubmit = async () => {
// //     // alert(email + password);
// //     try {
// //       // async 
// //       setLoader(true);
// //       let res = await auth.signInWithEmailAndPassword(email, password);
// //       // console.log(res.user);
// //       setUser(res.user);
// //       setLoader(false);
// //     } catch (err) {
// //       setError(true);
// //       setLoader(false);
// //     }
// //     setEmail("");
// //     setPassword("");
// //   }
// //   const handleLogout = async () => {

// //     setLoader(true);
// //     await auth.signOut();
// //     setUser(null);
// //     setLoader(false);

// //   }
// //   const handleEmailInput = (e) => {
// //     // console.log(email);
// //     setEmail(e.target.value);
// //   }
// //   useEffect(() => {
// //     auth.onAuthStateChanged(user => {
// //       console.log(user)
// //       setUser(user);
// //       setMainLoader(false);
// //     })

// //   }, []);
// //   return (
// //     <>
// //       {mainLoader == true ? <h1>wait for a second</h1> :
// //         loader == true ? < h1 > Loading....</h1>
// //           : user != null ?
// //             <>
// //               <h1>User LoggedIn {user.uid}
// //                 <button onClick={handleLogout}>Logout</button>
// //               </h1>
// //             </>
// //             :
// //             <>
// //               <h1>Firebase Login</h1>
// //               <input type="email" value={email}
// //                 onChange={handleEmailInput}></input>
// //               <input type="password"
// //                 value={password} onChange={(e) => {
// //                   setPassword(e.target.value)
// //                 }}
// //               ></input>
// //               <input type="button" value="submit" onClick={handleSubmit}></input>
// //             </>
// //       }
// //     </>
// //   );
// // }


// //  export default App;
// import React,{useContext} from 'react'
// import { Switch, Route, BrowserRouter as Router,Redirect} from "react-router-dom"
// import Feed from './components/Feed'
// import Login from './components/Login'
// import Signup from './components/Signup';
// import Profile  from './components/Profile';
// import {AuthProvider , AuthContext } from './context/AuthContext'

// // import { AuthContext, AuthProvider } from "./context/AuthContext";
// // // let isSingedUp = Math.random() < 0.5 ? true : false;
// function App() {
//     return (
//        <>
      
//        <Router>
//        <AuthProvider>
//            <Switch>
              
    
//                <Route path="/login" exact component={Login}></Route>
//                <Route path="/signup"  exact component={Signup}></Route>
//                <PrivateRoute path="/profile"  exact abc={Profile}></PrivateRoute>
//               <PrivateRoute path="/"  exact abc={Feed}></PrivateRoute>
//            </Switch>
//            </AuthProvider>
//        </Router>
    
//        </>
//     )
// }
// function  PrivateRoute(props) {

//     let Component=props.abc;
//     let {currUser}= useContext(AuthContext);
//     console.log(currUser);
//     return(
//         <Route {...props } render={
//             (props) =>{
//                 return  currUser!=null?<Component {...props}></Component>:<Redirect to='/login'></Redirect>
//             }
//         }></Route>
//     )


    
// }

// // history 
// // location

// export default App;
// // Private Route 
import React,{useContext} from 'react'
import { Route,Switch,Redirect,BrowserRouter as  Router } from 'react-router-dom';
 import { AuthContext,AuthProvider } from './context/AuthContext'
 import Login from './components/Login';
 import Feed from './components/Feed';
 import Signup from './components/Signup';
 import Profile from './components/Profile';
function App() {
    return (
        <>
        <Router>
        <AuthProvider>
          <Switch>
              <Route path="/login"   component={Login}></Route>
              <Route path="/signup" component={Signup}></Route>
               <PrivateRoute path="/profile"  exact abc={Profile}></PrivateRoute>
               <PrivateRoute path="/" exact abc={Feed}></PrivateRoute>
          </Switch>
                
           
        </AuthProvider>
        </Router>
     </> 
    )
}
function PrivateRoute(props){
    let Component=props.abc;
    let {currUser}=useContext(AuthContext);
    console.log(currUser)
    return(
        
     <Route {...props} render={
       (props)=>
       {return currUser!=null ?<Component {...props}></Component>:<Redirect to='/login'></Redirect>}
         

     }></Route>

     
      
     )
}

export default App
