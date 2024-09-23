import React, { Component } from "react";
/*class Contact extends Component{
    render(){
        return(
            <>
            <h1>Contact Details</h1>
            <p>E-mail: hello@mail.com</p>
            <p>Contact: +123 456 7890</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.896825062125!2d80.13872847460965!3d13.356691106319534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1708583423684!5m2!1sen!2sin" width="1366" height="768"  allowfullscreen="" loading="lazy"></iframe>
            </>
        )
    }
}*/

function Contact(props){
    return <p>{props.reg.cp} {props.reg.regno} displayed using props</p>
}
export default Contact;