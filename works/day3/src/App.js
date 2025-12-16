// Create a simple app with two components:

// LightSwitch (child) - Contains a button that says either "Turn ON" or "Turn OFF"

// Room (parent) - Displays whether the room is bright or dark

// Requirements:

// When the button shows "Turn ON" and is clicked:
// • The display should change to "The room is bright"
// • The button should change to say "Turn OFF"

// When the button shows "Turn OFF" and is clicked:
// • The display should change to "The room is dark"
// • The button should change to say "Turn ON"

import React, {useState} from "react";
import LightSwitch from "./LightSwitch";

function Room(){
  const[isLightOn, setIsLightOn]=useState(false);

  function toggleLight(){
    setIsLightOn(!isLightOn);
  }

  return(
    <div>
      <h2>
        {isLightOn ? "The room is bright" : "The room is dark"}
      </h2>

      <LightSwitch
      isLightOn = {isLightOn}
      toggleLight = {toggleLight}
      />
      

    </div>
    
  )
}
export default Room;