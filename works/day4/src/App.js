// Create a simple profile viewer. When the page opens, show a message saying “Welcome, Guest!”. 
// Then, add a button labeled “Login as Alice”.

// When the button is clicked:

// .   The message should change to “Welcome, Alice!”

//      A message should also appear in the browser console: “User changed to Alice”

//      Use useEffect() to show the console message only when the user name changes.

import { useState, useEffect } from "react";

function ProfileView(){
  const[name, setName]=useState("Guest");


    useEffect( () => {
      console.log(`User changed to ${name}`)

    },[name]);

    const handleClick = () =>{
      setName("Alice");

    };
    
  
   return(
    <div>

      <h1>Welcome, {name}</h1>

      <button onClick={handleClick}>Login as Alice</button>

    </div>
  );
}
export default ProfileView;