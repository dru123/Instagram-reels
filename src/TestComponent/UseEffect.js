
// import React,{useState} from 'react'

// function UseEffect() {
//     const[currtask,setCurrTask]=useState("");
//     const[taskList,setTaskList]=useState([]);
//    const addTask=()=>{
//       let newTaskList= [...taskList];
//       newTaskList.push({
//           task:currtask,
//           id:Date.now()
//       })
//       setTaskList(newTaskList);
//       setCurrTask("")


//   }
//     return (
//         <div>
//             <h1> SIMPLE TODO APPLICATION....</h1>
//             <input type="text" value={currtask} placeholder={"Enter Your Task "} onChange={(e)=>{setCurrTask(e.target.value)}}></input>
//             <ul>
//                 {
//                 taskList.map((taskObj)=>{
//                     return (
//                 <li key={taskObj.id}>{taskObj.task}</li>

//                     )})}
                
//             </ul>
//             <button onClick={addTask}></button>

//         </div>
//     )
// }

// export default UseEffect
import React,{useState,useEffect}from 'react'

function UseEffect() {
    const[currTask,setCurrTask]=useState("");
    const[taskList,setTaskList]=useState([]);
    const addTaskList=()=>{
        let newTaskList=[...taskList];
        newTaskList.push({
            task:currTask,
            id:Date.now()
        })
        setTaskList(newTaskList);
        setCurrTask("");

    }
    useEffect(()=>{
        console.log("main effect run");
        return ()=>{
        console.log("main clean up")

        }

    },[taskList])
    const handleDelete=(id)=>{
       let newTaskList= taskList.filter((taskObj)=>{
            return taskObj.id!==id;
        })
         setTaskList(newTaskList);

    }
    return (
        
        <div>
             <h1> SIMPLE TODO APPLICATION....</h1>
            <input type="text"   value={currTask} placeholder={" Enter Your task "} onChange={(e)=>{setCurrTask(e.target.value)}} ></input>
            <button  onClick={addTaskList} > SUBMIT </button>
             <ul>{
                   taskList.map((taskObj)=>{
                       return(
                           <List  key={taskObj.id }taskObj={taskObj}  handleDelete={handleDelete}  currTask={currTask}> </List>             
                       )
                   })   
                 }
             </ul>
            
        </div>
    )
}


function List(props) {
    let taskObj=props.taskObj;
    let task=props.taskObj.task;
    let handleDelete=props.handleDelete;
  
    useEffect((task) => {
   console.log("use effect ran",task)
        return  ()=>{
             
          console.log(" id of task",task);
        }
    },[])
    return (
       <li key={taskObj.id } onClick={()=>handleDelete(taskObj.id)}>{taskObj.task}</li>
    )
}





export default UseEffect
