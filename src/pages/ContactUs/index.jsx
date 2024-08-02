import React, { useState } from "react";
import "./ContactUs.css";
function ContactUs(){
const [name,setName] = useState(''); 
const [email,setEmail] = useState(''); 
const [message,setMessage] = useState(''); 
const handle=(e)=>{
e.preventDefault();
    alert("Will contact you soon");
setName('');
setEmail('');
setMessage('');
}


    return(

<div className="Form">
<form>

    <input placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
    <input placeholder="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value) }/> <br/>
    <input className="Message" placeholder="Message" type="text"  value={message} onChange={(e)=>setMessage(e.target.value)}/><br/>
    <button onClick={handle}>Done</button><br/>
</form>


</div>

    );
}
export default ContactUs;