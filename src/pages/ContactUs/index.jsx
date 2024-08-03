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
<form className="FormCss">

<p style={{ fontWeight: 'bold'}}>Name</p>   
 <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
 <p style={{ fontWeight: 'bold'}}>Email</p>   
    <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value) }/> <br/>
    <p style={{ fontWeight: 'bold'}}>Message</p>   
    <input className="Message" type="text"  value={message} onChange={(e)=>setMessage(e.target.value)} style={{height:'150px'}}/><br/>
    <button onClick={handle}>Done</button><br/>
</form>

<div className="imageCss">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjQ3BpzwbCnZY26wua72vPZQE2QWimjmzVQ&s" alt="book" style={{width:'300px'}}/>

</div>


</div>

    );
}
export default ContactUs;