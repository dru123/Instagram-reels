//WRITING USING HOOKS....----------

import React, { useState } from 'react'


function Profile(){
    const[name,setName]=useState("Backbencher");
    const[age,setAge]=useState(23);
  
  let   onNameChange=(e)=>{
        setName(e.target.value)
    }
     let onAgeChange=(e)=>{
        setAge(e.target.value)
    }


  
        return(
            <div>
                <form>
                    <input type="text"  value={name} onChange={onNameChange }></input>
                    <input type="text" value={age} onChange={ onAgeChange}></input>
                    <h2>
                        Name:{name},Age:{age}
                    </h2>
                </form>

            </div>
        )
    }

    // onNameChange = (e) => {
    // this.setState({
    // name: e.target.value,
    // });
    // };
    // onAgeChange = (e) => {
    // this.setState({
    // age: e.target.value,
    // });
    // };
    // render() {
    // return (
    // <div>
    // <form>
    // <input
    // type="text"
    // value={this.state.name}
    // onChange={this.onNameChange}
    // />
    // <input type="text"
    // value={this.state.age}
    // onChange={this.onAgeChange}
    // />
    // <h2>
    // Name: {this.state.name}, Age: {this.state.age}
    // </h2>
    // </form>
    // </div>
    // );
    // }
   export default Profile
   