import React, {useEffect } from 'react';

function q9() {
    function fn(){
        window.removeEventListener("mousemove", this.handleMousePosition); 
    }
    useEffect(()=>{
        window.addEventListener("mousemove", this.handleMousePosition);
        return fn
    },[])
    return (
        <div>
            
        </div>
    )
}

export default q9

// reeact aapne app call krlega unmount ko yani returnn kr dega jb delete hoga react itself calll this fn function