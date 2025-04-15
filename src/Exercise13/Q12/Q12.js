import React, { useState } from "react"; 
import UserGreeting from "./UserGreeting"; // Ensure correct path 
 
const Q12 = () => { 
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "50px" }}> 
      <h2>Enter Your Name</h2> 
      <input 
        type="text" 
        placeholder="First Name" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
      /> 
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      /> 
      <UserGreeting firstName={firstName} lastName={lastName} /> 
    </div> 
  ); 
}; 
 
export default Q12; 