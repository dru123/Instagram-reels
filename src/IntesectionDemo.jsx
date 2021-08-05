import React,{UseEffect}  from 'react';
import v1 from '/fashion.mp4'
import v2 from '/tree.mp4'
import v3 from '/water.mp4'
import v4 from '/frog.mp4'
export default function IntersectionDemo(){
    function callBack(entries){
        console.log(enteries);
        entries.forEach((entry)=>{// entry yh pr ek ekk video element  h usko show kr rh h us pr event listenrr attahch kra h
            let child =entry.target.children[0];
            console.log(child.id);
        })

        useEffect( function fn()  {
            //ui
            let conditionObject={
                root:null,//full page visible hona chaiye
                threshold:"0.9"//90% area  m visible ho jyi video jese hi chnage hoga area km y jyda dubara call hoga child print krega
            }
            let observer=new IntersectionObserver(callBack,conditionObject);//jese condition satisfy hogi calll back chlega 
            let elements=document.querySelectorAll(".video-container");
            elements.forEach((elv)=>{
                observer.observe(el);// event listenr attach kr diya hr ek video element m ..
            })
        }, [])
        return (
            <div>
                    <div className="video-container">
                    <Video
                    src={v1}
                id="a"
                ></Video>
                  </div>
                    <div className="video-container">
                    <Video
                    src={v2}
                id="b"
                ></Video>
                    </div>
                    <div className="video-container">
                    <Video
                    src={v3}
                id="c"
                ></Video>
                    </div>
                    <div className="video-container">
                    <Video
                    src={v4}
                id="d"
                ></Video>
                    </div>
                    
            </div>

        )
    
}

// export default IntersectionDemo;

 function Video(props){
     return (
         <video className="video-styles" controls muted="true"  id={ props.id}>
             <source src={
                 props.src
             }type="video/mp4"
             ></source>
         </video>
     )
 }}