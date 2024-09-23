import React, { useState, useEffect} from "react";
function Clicker(){
    const [c,setc]=useState(0);
    useEffect(()=>{document.title=`You clicked ${c} times`;});
    return(
        <div>
            <p>You clicked {c} times</p>
            <button onClick={()=>setc(c+1)}>Click this</button>
        </div>
    )
}
export default Clicker;