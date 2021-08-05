
import React,{useState, useEffect} from 'react'
import auth from '../firebase';
  export const AuthContext=React.createContext();
 export function AuthProvider({children}) {
    const[currUser,setUser]= useState();
    const[loading,setLoader]= useState(true);
   async function login (email,password){
      return   await  auth.signInWithEmailAndPassword(email,password);

    }
   async function signOut(){
     console.log(" i m in signout func");
       return await auth.signOut();
    }
    function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password);
  }

    useEffect(()=>{
// 9811158924 manorjn 
      //event listener add.. 
      //auth chnage first time bs attach krdeta  h event.. shuru m bs attach thn work ()=> tkai jb bd m kbhi user ayee to uske acc to workk kre

    const cleanUp=  auth.onAuthStateChanged(user=>{
                                console.log("26",user);
                          setUser(user);
                          setLoader(false);

        })
        return  cleanUp;//jb ap bnd hogi jb apne call hokr connection khtm kr dega connection loose nhi jhodne chaiye
        
    },[])
    
    const  value={
        currUser,
        signOut,
        login,
        signup
    }
    return (
       <AuthContext.Provider value={value}>
                {!loading && children}
       </AuthContext.Provider>

    )
}




