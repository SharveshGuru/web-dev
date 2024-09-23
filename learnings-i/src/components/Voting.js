import { useState } from "react";
function Voting (props){
    const[like,setlike]=useState(0);
    const[dislike,setdislike]=useState(0);
    return(
        <div style={like>dislike?{background:"green"}:{background:"red"}}>
            <h1>Brand Name: {props.brandname}</h1>
            <h2>Model: {props.model}</h2>
            <button onClick={()=>setlike(like+1)}>Like {like}</button>
            <button onClick={()=>setdislike(dislike+1)}>Dislike {dislike}</button>
        </div>
    )
} 
export default Voting;