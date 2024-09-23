import React from "react";
import styles from "./style.module.css";
function Department(){
    const smartsiva={
        color: "white",
        backgroundColor:"teal",
        height:"150 px",
        margin:"10 px",
        padding:"10 px",
        border:"dotted 5px red"
    }
    
    return(
        <>
        <div><h1 style={{color:"blue"}}>R.M.K. ENGINEERING COLLEGE</h1></div>
        <div style={{backgroundColor:"lightblue", height:"35px"}}><p>Welcome</p></div>
        <div style={smartsiva}><p>Styles</p></div>
        <p className={styles.bigDisplay}>Department of Computer Science and Business Systems</p>
        </>
    );
}
export default Department;