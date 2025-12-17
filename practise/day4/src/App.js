// You are creating a small welcome page for a website.

// When the page loads for the first time, a message should appear in the browser console that says:
// "Welcome message displayed."

// On the screen, show this text:
// "Hello, user! Welcome to our site."

// There should be no button and no interaction. The console message should only appear once, the first time the page loads.

import { useState, useEffect } from 'react';

function ProfileView(){
  const [count, setCount] = useState(0);

  useEffect( () =>{
    console.log("Welcome message displayed");
  }, [ ]);

  return(

    <div>
       <p>Hello, user! WElcome to our site</p>
    </div>

  );
}
export default ProfileView;

